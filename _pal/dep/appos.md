---
layout: relation
title: 'appos'
shortdef: '<shortdef>'
udver: '2'
---

Appositional modifiers are co-referential [nouns](NOUN) or [proper nouns](PROP), i.e. the appositional modifier and its head refer to the same referent so that either of them could represent the referent on its own.

Middle Persian does not make use of punctuation marks so that [flat]() relations cannot always be clearly distinguished from appositional relations. If the attribute linking [*ezāfe* particle](DET) is present, it is definitely an appositional relation as the second element is clearly marked as dependent.

- "Ohrmazd, the Lord"
~~~ sdparse
ohrmazd ī xwadāy \n Ohrmazd EZ lord
det(xwadāy, ī)
appos(ohrmazd, xwadāy)
~~~

- "Wištāsp, King of Kings"
~~~ sdparse
wištāsp šāhān šāh \n Wištāsp king.PL king
nmod(šāh, šāhān)
appos(wištāsp, šāh)
~~~

- "For what have we humans been put into the world?"
~~~ sdparse
amāh mardōm bē ō gētī čē rāy dād ēstēd \n we human forth to world what for put.PP stands
nsubj:pass(dād, amāh)
appos(amāh, mardōm)
~~~

- "in the summer month, that is month Frawardīn, day Ohrmazd, the beginning of summer" (NB: that is the first day of the first month = 22 March)
~~~ sdparse
pad ān ī hamīn māh ast māh frawardīn rōz ī ohrmazd bun ī hamīn \n at that EZ summer month is month Frawardīn day EZ Ohrmazd beginning EZ summer
appos(māh-7, frawardīn)
conj(māh7, rōz)
appos(rōz, ohrmazd)
det(ohrmazd, ī-10)
appos(māh-7, bun)
det(hamīn-14, ī-13)
nmod(bun, hamīn-14)
~~~

If a Middle Persian word explains an Avestan phrase or is inserted into a Middle Persian translation as additional information, it is annotated as `appos`.

- "I keep bestowing upon you, who are the Amahraspands, liturgies (publicly) and acts of veneration (Ustōfrīt-offerings)."
~~~ sdparse
frāz ašmāh rādēnam kē amahraspand =ēd yazišn āšnāg niyāyišn ustōfrīt \n forth you.PL bestow.1SG REL Amahraspand are.2PL liturgy public veneration Ustōfrīt
advmod(rādēnam, frāz)
iobj(rādēnam, ašmāh)
obj(rādēnam, yazišn)
mark(amahraspand, kē)
acl:relcl(ašmāh, amahraspand)
cop(amahraspand, =ēd)
appos(yazišn, āšnāg)
conj(yazišn, niyāyišn)
appos(niyāyišn, ustōfrīt)
~~~

- "And he is producing *Fšūš* for us (good things)."
~~~ sdparse
u =mān fšūš kirdār nēkīh \n and us Fšūš making goodness
cc(kirdār, u)
obl(kirdār, =mān)
obj(kirdār, fšūš)
appos(fšūš, nēkīh)
~~~

<!-- Interlanguage links updated Út 30. června 2026, 10:59:40 CEST -->
