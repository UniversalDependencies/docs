---
layout: relation
title: 'nmod'
shortdef: 'nominal modifier'
udver: '2'
---

The `nmod` relation is used for nominal dependents of another noun or noun phrase. We use the following language-specific subtypes:

* `nmod`: noun modifier functionally corresponds to an attribute,
* [nmod:poss](): noun modifier functionally corresponds to possessive complement,
* [nmod:npmod](): noun phrase as nominal modifier.

In Middle Armenian `nmod` is used:

* for noun-noun modification with an attributive or associative relations between them: `nmod` nouns attached to nouns are usually in the nominative [Case]() and may precede
or follow the modified noun. 

~~~ sdparse
կաղնի /NOUN[Case=Nom] ծառ \n oak tree
nmod(ծառ, կաղնի)
nmod(tree, oak)
~~~

The `nmod` relation is further specified by the [case]() relation (associative modfication).

~~~ sdparse
արիւն ջուրի նման \n ariwn ǰowri nman \n blood like water
nmod(արիւն, ջուրի)
case(ջուրի, նման)
nmod(blood, water)
case(water, like)
~~~


Note, that so-called “bare noun compounds” (e.g. _թղթակից անդամ&nbsp;_ “corresponding member”) marked using the [compound]() relation.

* for an explicative attribute of a noun or for noun modifier specifying the whole-part relation: a typical example is a title/profession attached to a name of a person. 
The relation is similar to the [flat]() relation that links the first and the last name, but it is not labeled `flat` because the title is not part of the name:

~~~ sdparse

~~~
<!-- Interlanguage links updated St 12. listopadu 2025, 09:22:05 CET -->
