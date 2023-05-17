{ config, lib, pkgs, ... }:
{ imports = [ ./hardware-configuration.nix ./samba.nix ];
  system.stateVersion = "22.11"; # DO NOT EDIT

  boot = {
    loader.systemd-boot.enable = true;
    loader.efi.canTouchEfiVariables = true;
    loader.grub.device = "nodev";
  };

  time.timeZone = "Europe/London";

  networking = {
    hostName = "mini"; # Define your hostname.
#    networkmanager.enable = true; # I'm not sure this is necessary since no wireless is used atm
     nameservers = [ "192.168.2.2" ];
  };

#  etc."NetworkManager/system-connections" = {
#    source = "/persist/etc/NetworkManager/system-connections/";
#  };

  services.openssh.enable = true;

  # Enable CUPS to print documents.
  services.printing.enable = true;

  users.users = {
    s = {	### Define a user account. Don't forget to set a password with ‘passwd’.
      shell = pkgs.fish; # If you remove this line shell should default to bash.
      isNormalUser = true;
      extraGroups = [ "wheel" "www-data" ]; # Enable ‘sudo’ for the user.
      openssh.authorizedKeys.keys = [
        "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABgQC7dzj9gyv3arm4q525d6w23TZIdzQlVL2u6OnK0Y+O0ZQgX3ZRbHaZ4bYyYE5kk2EKVfef0Pkfn7ikk5svWpLUBx8PpBbSQnio9HkgBsPXiSu/LfsRZEvt+VOYHu8naPECeG01HybRTjAiZkiqGGXwvrhSquYvXZL44mrmIoxiCB095w6b0QKBmp6/UAgoEQbLKEXaw1JROWDkTBtrmG3G3WRP5kujHOt2U5YFVjVDMkGBjhqRahLsvCd0ztKakW0/H5sEXEsEtkOmmE5M3nrkO/K7/MGZM4dyIUwrd0ouRF+kE4fBMcYFoW/+LIBSaOWtxEfVeYLcAPF5GufDSF6hKk6+EYVWVWxJuSFAlym2+4cwtMr/BYkHtkSpAk667jsSSLCxsH8Bu17bizkA0/7KgYYgEEMmTvM/TjOuX1yM2QnwXwNpDmXVzqfZ/upnX8bvhzgk3XXEoqGiNxxPzSPyxv7ZfMCwOwglzFa146cpfLLrgst5OLcCrTwY1qGO4tU= s@admins-MacBook-Pro.local"
        "ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIJmBQKTsYDwm0LOW2KVcabuqddLbXLf7VAJReV8UIdfM XS"
      ];
    };
  };

  nixpkgs.config.allowUnfreePredicate = pkg: builtins.elem (lib.getName pkg) [ "broadcom-sta" ];
  environment.systemPackages = with pkgs; [

    fzf
    ncdu
#    ncmpcpp
    pandoc
    xplr

    # SHELL
      fish
      nushell
      elvish
      starship

    # HFS
      hfsprogs #for attaaching macos hard drives
      xfsprogs #for Crucial which is XFS

    # TEXT EDITORS
      vim

    # WEB SERVER
#      nginx
#      php
#      mariadb

    # FILE TOOLS
      wget
      git
      ffmpeg
  ];
}
