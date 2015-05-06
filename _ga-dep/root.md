---
layout: relation
title: 'root'
shortdef: 'root'
---

The `root` grammatical relation points to the root of the sentence. A fake node “ROOT” is used as the governor. The ROOT node is indexed with “0”, since the indices of real words in the sentence start at 1.

~~~ sdparse
ROOT Ní thugtar íocaíochtaí mura n-iarrtar iad \n Payments are not made if they are not requested
root(ROOT, thugtar)
~~~
