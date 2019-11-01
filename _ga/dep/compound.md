---
layout: relation
title: 'compound'
shortdef: 'compound'
udver: '2'
---

UD Irish uses the `compound` relation for noun compounding. In Irish, when two nouns are compounded, the second is in the genitive case. Compounds can denote ownership or  an attribute.

### Examples

#### Attributive:

_Oifig an <b>Phoist</b>_ `<b>Post</b> Office'   (lit. Office the Post)

~~~ sdparse
ag cosaint na n-oifigí poist tuaithe \n at protecting the offices post country
compound(n-oifigí, poist)
compound(n-oifigí, tuaithe)
~~~

#### Titles:

~~~ sdparse
an tSúir Concepta \n Sr. Concepta
compound(Concepta, tSúir)
~~~


#### Reflexive Pronoun: féin

Similar to the emphatic pronoun _self_ in English, e.g. himself, themselves.

~~~ sdparse
Cé hiad féin ? \n Who are THEY ?
compound(hiad, féin)
~~~ 

#### Ownership:

It can also translate as ownership, yet the possessive pronoun will also be present in those constructions using _féin_:

~~~ sdparse
ábalta a rá lena bpobal féin \n able to say to their own community
compound(bpobal, féin)
~~~


~~~ sdparse
le bean Choilm \n with Colm's wife
compound(bean, Choilm)
~~~






