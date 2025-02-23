{ pkgs }: {
  channel = "unstable";
  packages = [
    pkgs.nodejs_20
    pkgs.yarn-berry
  ];
  idx.extensions = [

  ];
  idx.previews = {
    previews = {
      web = {
        command = [
          "yarn"
          "dev"
          "--port"
          "$PORT"
          "--hostname"
          "0.0.0.0"
        ];
        manager = "web";
      };
    };
  };
}
