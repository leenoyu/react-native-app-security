import { ConfigPlugin } from "@expo/config-plugins";
import { RNASConfig } from "./types";
import withpreventRecentScreenshots from "./withPreventRecentScreenshots";

const withRNAS: ConfigPlugin<RNASConfig> = (config, props) => {

  config = withpreventRecentScreenshots(config, props.preventRecentScreenshots);

  return config;
};

export default withRNAS;

export type { RNASConfig };
