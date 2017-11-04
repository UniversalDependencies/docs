---
layout: relation
title: 'root'
shortdef: 'root'
---

The `root` grammatical relation points to the root of the sentence. A dummy node “ROOT” is used as the governor. The ROOT node is indexed with “0”, since the indices of real words in the sentence start at 1.

### Example

_Ní <b>thugtar</b> íocaíochtaí mura n-iarrtar iad_ `Payments are not <b>made</b> if they are not requested'

~~~ sdparse
ROOT Ní thugtar íocaíochtaí mura n-iarrtar iad \n ROOT Not given payments if_not requested them 
root(ROOT, thugtar)
~~~
