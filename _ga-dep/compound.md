---
layout: relation
title: 'compound'
shortdef: 'compound'
---

UD Irish uses the `compound` for noun compounding. In Irish, when two nouns are compounded, the second is in the genitive case. Compounds can denote ownership or  an attribute.

### Examples

#### Attributive:

_Oifig an Phoist_ `Post Office'   (lit. Office the Post)

~~~ sdparse
ag cosaint na n-oifigí poist tuaithe \n protecting the rural post offices
compound(n-oifigí, poist)
compound(n-oifigí, tuaithe)
~~~

~~~ sdparse
roimh teacht na traenach \n before the train's arrival
compound(teacht, traenach)
~~~


#### Titles:

~~~ sdparse
an tSúir Concepta \n Sr. Concepta
compound(Concepta, tSúir)
~~~


#### Reflexive Pronoun: féin

Similar to the emphatic pronoun -self in Engish in himself, themselves, itself etc.

~~~ sdparse
Cé hiad féin ? \n Who are THEY ?
compound(hiad, féin)
~~~ 

#### Ownsership:

It can also translate as ownership, yet the possessive pronoun will also be present in those constructions using _féin_:

~~~ sdparse
ábalta a rá lena bpobal féin \n able to say to their own community
compound(bpobal, féin)
~~~


~~~ sdparse
le bean Choilm \n with Colm's wife
compound(bean, Choilm)
~~~






