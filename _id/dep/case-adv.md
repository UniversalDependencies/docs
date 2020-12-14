---
layout: relation
title: 'case:adv'
shortdef: 'case to form adverbs'
udver: '2'
---

This is a special class of [case marking](case).
While deprel 'case' is usually a nominal dependent, in Indonesian it also can be used to form adverbs. Especially for preposition _secara_ "in a manner" and _dengan_ "with/in a manner of". 


~~~ sdparse
dijual secara legal \n sold legally
advmod(dijual, legal)
case:adv(legal, secara)
~~~

~~~ sdparse
dipilih dengan sengaja \n selected intentionally
advmod(dipilih, sengaja)
case:adv(sengaja, dengan)
~~~

Other examples: 
* _dengan indah_ = _dengan_ "in a manner of" + _indah_ "beautiful" = beautifully
* _secara bijaksana_ = _secara_ "in a manner of" + _bijaksana_ "wise" = wisely
