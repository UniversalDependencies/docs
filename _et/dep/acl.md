---
layout: relation
title: 'acl'
shortdef: 'clausal modifier of noun'
udver: '2'
---

The dependency relation  `acl` stands for finite and non-finite clauses that modify a nominal. Note that in Estonian relative clauses get assigned a specific relation [acl:relcl](), a subtype of `acl`.

* `acl` as an infinitive 

[et] _Tal oli plaan <b>minna edasi</b>_ "He had a plan <b>to go forward</b>"

~~~ sdparse
Tal oli plaan minna edasi
acl(plaan, minna)
~~~

* `acl` as a participle

[et] _See oli <b>ammu unustatud</b> plaan_ "This was a <b>long-forgotten</b> plan" 

~~~ sdparse
See oli ammu unustatud plaan
acl(plaan,unustatud)
~~~

* `acl`as a clause

[et] _See, <b>et päike tõuseb iga päev</b>, ei lohuta teda_ "The fact <b>that the sun rises every day</b> does not comfort him"

~~~ sdparse
See , et päike tõuseb iga päev , ei lohuta teda
acl(See, tõuseb)
~~~

<!-- Interlanguage links updated Pá kvě 14 11:08:44 CEST 2021 -->
