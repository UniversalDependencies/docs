---
layout: relation
title:  'acl'
shortdef : 'clausal modifier of noun'
udver: '2'
---

Clausal modifiers do not have relative pronouns. The prototypical case is a verb preceding the noun.

~~~ sdparse
ਤੁਰਦੀ ਰੇਲ ਗੱਡੀ \n moving rail car
compound(ਗੱਡੀ, ਰੇਲ)
compound(rail, car)
acl(ਗੱਡੀ, ਤੁਰਦੀ)
acl(car, moving)
~~~

Some other ways of phrasing this:

~~~ sdparse
ਬੈਠਿਆ ਹੋਇਆ ਮੁੰਡਾ \n sitting being boy
acl(ਮੁੰਡਾ, ਬੈਠਿਆ)
acl(boy, sitting)
aux(ਬੈਠਿਆ, ਹੋਇਆ)
aux(sitting, being)
~~~

~~~ sdparse
ਆਖਣ ਵਾਲਾ ਮੁੰਡਾ \n saying (vālā) boy
acl(ਮੁੰਡਾ, ਆਖਣ)
acl(boy, saying)
mark(ਆਖਣ, ਵਾਲਾ)
mark(saying, (vālā))
~~~

This kind of verb can take some arguments, but the subject can never take the ergative, instead a passive agentive case marker like ਵੱਲੋਂ.

~~~ sdparse
ਸੱਸ ਵੱਲੋਂ ਨੂੰਹ ਨੂੰ ਦਿੱਤੇ ਅਸ਼ੀਰਵਾਦ \n mother.in.law by daughter.in.law DAT given blessings
nsubj:pass(ਦਿੱਤੇ, ਸੱਸ)
nsubj:pass(given, mother.in.law)
iobj(ਦਿੱਤੇ, ਨੂੰਹ)
iobj(given, daughter.in.law)
acl(ਅਸ਼ੀਰਵਾਦ, ਦਿੱਤੇ)
acl(blessings, given)
~~~

## With case markers

~~~ sdparse
ਭਾਰਤ ਜਾਣ ਦੀ ਗੱਲ \n India going GEN talk
acl(ਗੱਲ, ਜਾਣ)
acl(talk, going)
obl(ਜਾਣ, ਭਾਰਤ)
obl(going, India)
mark(ਜਾਣ, ਦੀ)
mark(going, GEN)
~~~