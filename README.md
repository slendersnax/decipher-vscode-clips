# Sublime Text Decipher Clips

A collection of snippets and commands to help with survey programming in Decipher.


## Steps to Install

Clone repo or download and put it in your Sublime Text/Packages folder.
- Windows 7/10/11 Default path: `C:\Users\[yourUserName]\AppData\Roaming\Sublime Text\Packages`
- Most Linux Distros Default path: `~/.config/sublime-text/Packages`

Please note that in Windows the "AppData" folder may be hidden. If you type 

`C:\Users\[yourUserName]\AppData\Roaming\Sublime Text\Packages`

into your Windows Explorer’s address bar you will be taken to that location.

Please note that depending on the version of Sublime Text you have installed, the folder may be called `Sublime Text 3`/`Sublime Text 2`/`sublime-text-3`/`sublime-text-2`.


## How to call the clips/snippets

Create a new XML document (the shortcuts for clips and snippets will only work with the XML extension). 

To use a clip, select the text you want to wrap in tags and then either use the shortcut or the context menu option.  

To use a snippet, type the snippet's tab trigger and then hit tab. This will generate short fragments of text. 

Some snippets have placeholder fields. If your snippet has a placeholder field the cursor will move to that field automatically for you to update the text. If your snippet has multiple fields (such as the loop snippet) hitting tab will move the cursor to the next placeholder field. 

You can define your own keymappings in (Default (Linux or Windows).sublime-keymap)

To bring up the context menu, right click in the text editor. You can then navigate to the "Dec-Question Types" or "Dec-Question Elements" to view the avaliable clips. This will also display the current shortcuts for them. 

## Changes compared to original

- additional snippets:
    - `<define>`: triggered with `define`
    - `<insert ...>`: triggered with `ins`
    - `<noanswer ...>`: triggered with `noa`
- changes to existing snippets:
    - `<block ...>`: starting tag is in one line
    - `<comment>`: can now be triggered with `cmm`
    - `<quota label="q_CURSOR" sheet="CURSOR">`: the cursor now starts as shown

- additional commands (also present in the Context Menu):
    - added `makeChoicesLabelMatchValue`: used on items without a preceding label to create choices with corresponding values
        - shortcut: `ctrl+shift+3`
- changes to existing commands:
    - added shortcut for `makeRowsLabelMatchValue`: `ctrl+shift+1`
    - added shortcut for `makeColsLabelMatchValue`: `ctrl+shift+2`
    - `makeComment` (create `<html>` / info tag): modified so that the result resembles a typical question tag (first word becomes label, tags and attributes on new lines)
