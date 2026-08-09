# Creating your mod
You can create your mod in one of two ways:
- Using a [premade mod](https://github.com/Bopl-Battle-Modding-Community/mod-template) as a template. This is the recommended option for new mods.
- Making a project from a BepInEx template. This is not recommended for new mods because it requires installing older/deprecated versions of .NET to set up the project. (Though new .NET versions can still compile the mod after the initial setup is finished).

Both of these options will give a similar starter project.

## Create from a premade mod

### With Git
If you want to create a GitHub repository based off of the template, go to the [GitHub repository](https://github.com/Bopl-Battle-Modding-Community/mod-template) and click "Use this template" in the top right. After setting up the repository, clone it on your computer and skip the rest of this section.

Otherwise, clone the repository from the command line:
```bash
git clone https://github.com/Bopl-Battle-Modding-Community/mod-template.git
```

If you're cloning directly from the repo, make sure to remove the original repository from your remote sources:
```bash
git remote remove origin
```

### Without Git
First, [download the `.zip`](https://github.com/Bopl-Battle-Modding-Community/mod-template/archive/refs/heads/main.zip) containing all the repository files and extract it:
![GitHub screenshot of user about to click "Download ZIP" button](/images/screenshots/creating/download.png)
![File explorer screenshot of downloaded ZIP file and extracted folder](/images/screenshots/creating/extract.png)

## Create from a template
You can also use a template provided by BepInEx instead of using the premade mod template.
::: danger

This option is not recommended for new mods/new modders! Use the premade mod if you can.

:::

::: warning

Creating from a BepInEx template may not work if you do not have .NET 6 installed and activated. If you cannot get .NET 6 or need to use a newer version, you will need to use the [premade mod](/create/create#create-from-a-premade-mod) as a base instead.

:::

First, install the BepInEx template through NuGet:
```bash
dotnet new -i BepInEx.Templates --nuget-source https://nuget.bepinex.dev/v3/index.json
```
When successful, this shows the following:
```text{3}
Templates                                     Short Name            Language    Tags
--------------------------------------------  --------------------  ----------  --------------------------------------
BepInEx 5 Plugin Template                     bepinex5plugin        [C#]        BepInEx/BepInEx 5/Plugin
BepInEx 6 .NET Launcher Plugin Template       bep6plugin_netfx      [C#]        BepInEx/BepInEx 6/Plugin/.NET Launcher
BepInEx 6 Il2Cpp Plugin Template              bep6plugin_il2cpp     [C#]        BepInEx/BepInEx 6/Plugin/Il2Cpp
BepInEx 6 Unity Mono Plugin Template          bep6plugin_unitymono  [C#]        BepInEx/BepInEx 6/Plugin/Unity Mono
```
The only relevant template here is the `BepInEx 5 Plugin Template` (highlighted above).

Once the template is installed, create the project:
```bash
dotnet new bepinex5plugin -n MyFirstBoplPlugin -T netstandard2.1 -U 2022.3.60
```
Each of the different parameters influence the starter project:
- `-n MyFirstBoplPlugin`: Sets the name of the project. You can change this to change the final assembly (`.dll` file) name.
- `-T netstandard2.1`: Sets the target .NET framework for the project. Only change this if you know what you're doing.
- `-U 2022.3.60`: Sets the game's Unity version (fully written as `v2022.3.60f1`).

After running the command, you should see this message: 
```text
The template "BepInEx 5 Plugin Template" was created successfully.
```

## Setting up the dependencies
In order to mod Bopl battle, we need to reference the game's DLLs in the project we created in the previous step.


### Locating the install folder and DLLs
In order to access the game's DLLs, we first need to locate where the game is installed.
The game files will likely be located at: 
- On Windows: `C:\Program Files (x86)\Steam\steamapps\common\Bopl Battle`
- On Linux: `$HOME/.local/share/Steam/steamapps/common/Bopl Battle`

If not, go to your steam library, select Bopl battle, and select `Browse local files`.

![Bopl Battle selected in the steam library with the Manage context menu item hovered, with the Browse local files context sub-menu item selected](/images/screenshots/creating/bopl-battle-selected-in-steam-library-with-browse-game-files-selected.png)

From there, the game's DLLs will be in `<bopl install folder>/BoplBattle_data/Managed`.

You don't really need to know what all of the libraries in there are, but here's the general idea for some of them/some of the important ones:
- `Assembly-CSharp.dll` is the file containing all of the game's code. The game is written in C#, and fortunately C# is easy to decompile and analyze. Bopl Battle's code also isn't obfuscated in any way.
- `Unity.*.dll` and `UnityEngine.*.dll` are pretty self explanatory. They contain stuff related to the unity engine.
- `mscorlib.dll` and `System.*.dll` are core libraries that you shouldn't reference the game's copy of. If you need to use a `System.*.dll` library, you'll distribute your own copy of that file with your mod instead of using the game's copy of it.

### Publicizing `Assembly-CSharp.dll`
Some of the members of the game's classes are private, but for modding purposes you may want to access them anyway. Thus, we want to edit the version of `Assembly-CSharp.dll` that you are referencing to make everything public. Fortunately, there are already several automatic tools out there for this exact purpose. Here are two that are known to work for Bopl Battle and that can run on wine for linux users.
- https://github.com/CabbageCrow/AssemblyPublicizer/. This is a popular option but it may fail to run on some systems.
- https://github.com/helightdev/UnityPublicizer. Alternative to try if the first option doesn't run for you.

If neither of them are working for you there are many other assembly publicizers out there.

With whatever publicizer you have, make a publicized version of `Assembly-CSharp.dll`. Don't overwrite the original `Assembly-CSharp.dll` though. Publicizers usually make a copy and then edit the copy, so that should only happen if you manually do it.

### Referencing the assemblies


<hr>

::: info

The rest of this documentation is currently incomplete. If you would like to add on to the documentation, please [contribute](https://github.com/Bopl-Battle-Modding-Community/docs) to the repository.

:::