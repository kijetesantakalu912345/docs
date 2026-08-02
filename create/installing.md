# Installing the .NET SDK
The .NET SDK is a set of developer tools that allow you to create programs in C#. We need to install this in order to write and compile mods.

::: warning

**The latest recommended .NET version to install is .NET 6**. Later versions may have trouble loading the command-line mod template provided by BepInEx, but can still be used to build mods. 

:::

::: info

If you installed Visual Studio, you likely installed the .NET SDK alongside it. If you're unsure whether or not you installed it, [verify the installation](/create/installing#verify-the-installation).
If it is installed, you can skip this section.

:::

## Download

Download instructions for different operating systems can be found here.

::: details Windows

Download the installer from [this page](https://dotnet.microsoft.com/en-us/download).
You can also do a command-line installation by running `winget install Microsoft.DotNet.SDK.10`.

:::

::: details Debian/Ubuntu/Linux Mint

First, add the Microsoft package signing key to your system:
```bash
wget https://packages.microsoft.com/config/debian/13/packages-microsoft-prod.deb -O packages-microsoft-prod.deb
sudo dpkg -i packages-microsoft-prod.deb
rm packages-microsoft-prod.deb
```

After that, simply install the the package using `apt`:
```bash
sudo apt update
sudo apt install dotnet-sdk-10.0
```

:::

::: details Arch Linux (pacman)

Install the latest .NET SDK:
```bash
sudo pacman -S dotnet-sdk
```

You can also install other versions by adding `-X.0` like so:
```bash
sudo pacman -S dotnet-sdk-8.0
```
A list of versions is available [here](https://wiki.archlinux.org/title/.NET#Installation).

Older versions need to be downloaded through the AUR.

:::

::: details Arch Linux (AUR)

If you want an older .NET version not in the official package repository, you can install it through the AUR:
```bash
yay -S dotnet-sdk-8.0-bin
```

A list of versions is available [here](https://wiki.archlinux.org/title/.NET#Install_multiple_versions_via_AUR).

:::

## Verify the installation
Verify the installation by running the following command:
```bash
dotnet --list-sdks
```
It should output something like this:
```text
10.0.110 [/usr/share/dotnet/sdk]
```
If the command fails, try to install .NET again.