---
title:  Can web worker manipulate DOM?
---
## Can web worker manipulate DOM?

You can’t access the window, therefore, You can’t any manipulation DOM elements. But, you can communicate to the window through postMessage and manage processes that you want.
