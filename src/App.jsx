import "./App.css";
import GenericModalApplicationMenu from "react-cismap/topicmaps/menu/ModalApplicationMenu";
import { useContext, useEffect } from "react";
import { UIDispatchContext } from "react-cismap/contexts/UIContextProvider";
import { getCollabedHelpComponentConfig } from "./lib";
import { getLibDescribe, getLibVersion, isDirty } from "./version";
function App() {
  const version = "aaaa";
  const footerLogoUrl = undefined;
  const email = "starkregen@cismet.de";
  const { setAppMenuVisible } = useContext(UIDispatchContext);
  useEffect(() => {
    setAppMenuVisible(true);
  }, [setAppMenuVisible]);
  return (
    <div>
      {"@cismet-collab/rainhazardmap-wupp-texts@" +
        getLibVersion() +
        (isDirty()
          ? " (dirty: release before usage[" + getLibDescribe() + "])"
          : "(ready to use)")}
      <GenericModalApplicationMenu
        {...getCollabedHelpComponentConfig({
          versionString: "#" + version,
          footerLogoUrl,
          email,
        })}
      />
    </div>
  );
}

export default App;
