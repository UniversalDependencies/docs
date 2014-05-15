---
layout: base
title:  'rcmod'
shortdef : 'None'
---

## rcmod (relative clause modifier)

A *relative clause modifier* (`rcmod`) marks relative clauses. The governor is the phrase or clause modified, most often a noun phrase but occasionally a full clause as well. The dependent is the main predicate of the relative clause.


<!-- fname:rcmod_NP.pdf -->
<div class="sd-parse">
Mies , jonka hän oli nähnyt eilen , oli taas ovella . \n The_man , whom he had seen yesterday , was again at_the_door .
rcmod(Mies-1, nähnyt-6)
punct(nähnyt-6, ,-2)
rel(nähnyt-6, jonka-3)
nsubj(nähnyt-6, hän-4)
aux(nähnyt-6, oli-5)
advmod(nähnyt-6, eilen-7)
punct(nähnyt-6, ,-8)
nsubj(oli-9, Mies-1)
advmod(oli-9, taas-10)
nommod(oli-9, ovella-11)
punct(oli-9, .-12)
</div>



<!-- fname:rcmod_clause.pdf -->
<div class="sd-parse">
Ovi kolahti auki , mikä säikäytti lapsen . \n The_door clanked open , which scared the_child .
nsubj(kolahti-2, Ovi-1)
advmod(kolahti-2, auki-3)
rcmod(kolahti-2, säikäytti-6)
punct(säikäytti-6, ,-4)
rel(säikäytti-6, mikä-5)
dobj(säikäytti-6, lapsen-7)
punct(kolahti-2, .-8)
</div>


