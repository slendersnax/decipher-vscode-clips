# VS Code Decipher Clips

A collection of snippets and commands to help with survey programming in Decipher. Based on my forked project: https://github.com/slendersnax/decipher-sublimetext-clips

## Steps to Install

1. head over to the ([releases](https://github.com/slendersnax/decipher-vscode-clips/releases)) page and grab the latest `.vsix` file.
2. in VS Code go to the **Extensions** tab and open it
3. in the top right corner of the **Extensions** view you will find a three-dot menu, open it
4. click on the last option: **Install from VSIX**, and select the downloaded `.vsix` file to install the extension

## How to call the clips/snippets

Go to the bottom right to select the file type - select "Decipher XML".

The currently available commands can be seen below. These can also be found via opening the Command Palette (`ctrl+shift+p`) and searching for "Decipher".

    
- Insert Snippet / Open Snippet dropdown
- keyboard shortcut: `ctrl+alt+p`
    - for a full list of snippets and the prefixes that trigger them check the `snippets/decipher-xml.code-snippets` file
      
- Make Radio question
- keyboard shortcut: `ctrl+r`
      
- Make Checkbox question
- keyboard shortcut: `ctrl+shift+c`
      
- Make Select / Dropdown question
- keyboard shortcut: `ctrl+shift+s`
      
- Make Text / OE question
- keyboard shortcut: `ctrl+t`
      
- Make Textarea / Large OE question
- keyboard shortcut: `ctrl+shift+t`
      
- Make Number question
- keyboard shortcut: `ctrl+n`
      
- Make Pipe
- keyboard shortcut: `ctrl+p`
      
- Make Rows - only labels, automatically added based on the number of lines selected
- keyboard shortcut: `ctrl+1`
      
- Make RowsWithValues - labels and values, automatically added based on the number of lines selected
- keyboard shortcut: `ctrl+shift+1`
      
- Make RowsMatchingLabels - only labels, parsed from the line (e.g. 99. None of the above -> `<row label="r99">None of the above</row>`)
- keyboard shortcut: `ctrl+9`
      
- Make RowsMatchingValues - labels and values, parsed from the line
- keyboard shortcut: `ctrl+shift+9`
      
- Make Cols - only labels, automatically added based on the number of lines selected
- keyboard shortcut: `ctrl+2`
      
- Make ColsWithValues - labels and values, automatically added based on the number of lines selected
- keyboard shortcut: `ctrl+shift+2`
      
- Make ColsMatchingLabels - only labels, parsed from the line
- keyboard shortcut: `ctrl+8`
      
- Make ColsMatchingValues - labels and values, parsed from the line
- keyboard shortcut: `ctrl+shift+8`
      
- Make Choices - only labels, automatically added based on the number of lines selected
- keyboard shortcut: `ctrl+3`
      
- Make ChoicesWithValues - labels and values, automatically added based on the number of lines selected
- keyboard shortcut: `ctrl+shift+3`
      
- Make ChoicesMatchingLabels - only labels, parsed from the line
- keyboard shortcut: `ctrl+7`
      
- Make ChoicesMatchingValues - labels and values, parsed from the line
- keyboard shortcut: `ctrl+shift+7`