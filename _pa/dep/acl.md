---
layout: relation
title:  'acl'
shortdef : 'clausal modifier of noun'
udver: '2'
---

Clausal modifiers of nouns, with the bare [acl]() relation, do not have relative pronouns dependent to them (those take the deprel [acl:relcl]()). The head is the noun being modified, and the dependent is the head of the clausal modifier, which is usually the main verb.

~~~ sdparse
ਤੁਰਦੀ ਰੇਲ ਗੱਡੀ \n moving rail car
compound(ਗੱਡੀ, ਰੇਲ)
compound(rail, car)
acl(ਗੱਡੀ, ਤੁਰਦੀ)
acl(car, moving)
~~~

~~~ sdparse
ਬੈਠਿਆ ਹੋਇਆ ਮੁੰਡਾ \n sitting being boy
acl(ਮੁੰਡਾ, ਬੈਠਿਆ)
acl(boy, sitting)
aux(ਬੈਠਿਆ, ਹੋਇਆ)
aux(sitting, being)
~~~

Clausal modifiers can take some arguments, but the subject can never take the ergative case, instead a passive agentive case marker like ਵੱਲੋਂ *vallõ*.

~~~ sdparse
ਸੱਸ ਵੱਲੋਂ ਨੂੰਹ ਨੂੰ ਦਿੱਤੇ ਅਸ਼ੀਰਵਾਦ \n mother.in.law by daughter.in.law DAT given blessings
nsubj:pass(ਦਿੱਤੇ, ਸੱਸ)
nsubj:pass(given, mother.in.law)
iobj(ਦਿੱਤੇ, ਨੂੰਹ)
iobj(given, daughter.in.law)
acl(ਅਸ਼ੀਰਵਾਦ, ਦਿੱਤੇ)
acl(blessings, given)
~~~

## With case markers and postpositions

The postposition ਵਾਲਾ *vālā* marks such clausal modifiers, with a habitual connotation, as well.

~~~ sdparse
ਆਖਣ ਵਾਲਾ ਮੁੰਡਾ \n saying (vālā) boy
acl(ਮੁੰਡਾ, ਆਖਣ)
acl(boy, saying)
mark(ਆਖਣ, ਵਾਲਾ)
mark(saying, (vālā))
~~~

Other cases can also be used. For example, the genitive with topic/information content of the head nominal.

~~~ sdparse
ਭਾਰਤ ਜਾਣ ਦੀ ਗੱਲ \n India going GEN talk
acl(ਗੱਲ, ਜਾਣ)
acl(talk, going)
obl(ਜਾਣ, ਭਾਰਤ)
obl(going, India)
mark(ਜਾਣ, ਦੀ)
mark(going, GEN)
~~~