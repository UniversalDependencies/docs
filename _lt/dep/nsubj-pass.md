---
layout: relation
title:  'nsubj:pass'
shortdef : 'passive nominal subject'
udver: '2'
---

A subject that is governed by a passive participle is not the proto-agent argument due to valency changing operations and is therefore marked as 'nsubj:pass'.

~~~ sdparse
Paveikslas nutapytas prieš daugelį metų . \n The-painting was-painted many years ago .
nsubj:pass(nutapytas, Paveikslas)
nsubj:pass(was-painted, The-painting)
~~~

If a passive participle is governed by a modal verb, the subject is dependent on the modal verb. In this case, we annotate the subject as 'nsubj', not nsubj:pass.

~~~ sdparse
Knyga gali būti parašyta kitais metais . \n The-book may be written next year .
nsubj(gali, Knyga)
nsubj(may, The-book)
~~~
