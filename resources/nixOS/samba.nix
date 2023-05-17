{ config, lib, pkgs, ... }:
{ ### samba.nix

  networking = {
    firewall.allowedTCPPorts = [ 445 139 8000 ];
    firewall.allowedUDPPorts = [ 137 138 8000 ];
  };
  
  environment.systemPackages = with pkgs; [
    cifs-utils # for Samba
  ];
 
  services = {
    samba = {
      enable = true; # You will still need to set up the user accounts to begin with: $ sudo smbpasswd -a yourusername
      extraConfig = ''
        browseable = yes
        smb encrypt = required
      '';
      shares.homes = {
        browseable = "no";
        "read only" = "no";
        "guest ok" = "no";
      };
    };
  
    avahi = { # This part makes connecting from a local Mac possible.
      enable = true;
      nssmdns = true;
      publish = {
        enable = true;
        addresses = true;
        domain = true;
        hinfo = true;
        userServices = true;
        workstation = true;
      };
      extraServiceFiles = {
        smb = ''
          <?xml version="1.0" standalone='no'?><!--*-nxml-*-->
          <!DOCTYPE service-group SYSTEM "avahi-service.dtd">
          <service-group>
            <name replace-wildcards="yes">%h</name>
            <service>
              <type>_smb._tcp</type>
              <port>445</port>
            </service>
          </service-group>
        '';
      };
    };
  };
}

