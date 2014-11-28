---
layout: entry
title:  'compound:prt'
shortdef : 'phrasal particle'
---

*Phrasal particles* (`compound:prt`) are used in connection with *phrasal verbs*, (partikkeliverbi, "particle verb" in Finnish grammar)  where the particle is considered an integral part of the verb expression. The governor of the dependency is the verb, and the dependent is the phrasal particle.

<!-- fname:prt.pdf -->
~~~ sdparse
Kävi ilmi , että ehdotus oli hyvä . \n Turned out , that the_suggestion was good .
compound:prt(Kävi-1, ilmi-2)
csubj(Kävi-1, hyvä-7)
punct(hyvä-7, ,-3)
complm(hyvä-7, että-4)
nsubj-cop(hyvä-7, ehdotus-5)
cop(hyvä-7, oli-6)
punct(hyvä-7, .-8)
~~~

Verb particles (see ISK <a href="http://scripta.kotus.fi/visk/sisallys.php?p=455">§455</a> and <a href="http://scripta.kotus.fi/visk/sisallys.php?p=658">§658</a>) are the only case where particles are distinguished from adverbs in UD Finnish. This distinction can be made by the following rough rules. A word is a verbal particle if it, together with the verb, forms an expression that has a meaning that differs from the meaning of the verb alone, and if the word cannot be modified by an adverb.

For instance, *laittaa kiinni* (*make closed, close*) is not a phrasal verb, as *kiinni* can be modified.

*Laitoin oven kokonaan kiinni. (I closed the door entirely.)*

In contrast, *ottaa kiinni* (*catch*) is a phrasal verb, as it has a meaning distinct from the verb *ottaa* (*take*), and *kiinni* cannot be modified.

*\*Poliisi otti rosvon kokonaan kiinni. (\*The police caught the robber entirely.)*

<!--details-->

The following verb expressions are considered phrasal verbs. Note that this list is not closed, but includes the phrasal verbs encountered corpus annotation. Also, due to the figurative meanings of many of these expressions, the English translations are approximate.

* _ajaa takaa_ "chase"
* _antaa periksi_ "give up"
* _astua voimaan_ "become valid"
* _jäädä jälkeen_ "be left behind"
* _jäädä kiinni_ "be caught" (not in the sense _be stuck into something_) 
* _jäädä käteen_ "be left in one's hand", "one is left with something" (figurative reading only.) 
* _jäädä väliin_ "be passed" (In the sense _I'll pass._)
* _kiriä kiinni_ "close the distance"
* _kuroa kiinni_ "close the distance"
* _kutsua kokoon_ "summon"
* _kutsua koolle_ "summon"
* _käydä ilmi_ "come up"
* _käydä kateeksi_ "make jealous"
* _käydä läpi_ "go through"
* _käydä sääliksi_ "be pitied"
* _laskea alleen_ "wet one's pants"
* _lyödä laimin_ "neglect"
* _lyödä läpi_ "strike through"
* _nukkua pommiin_ "oversleep"
* _olla kaupan_ "be for sale"
* _olla meneillään_ "be happening"
* _olla tarpeen_ "be necessary"
* _olla tarvis_ "be necessary"
* _olla voimassa_ "be valid"
* _ottaa irti_ "take sth out", "make the most of" (in expressions such as "ottaa ilo irti")
* _ottaa kiinni_ "catch"
* _ottaa lukuun_ "take into account"
* _ottaa mukaan_ "take along"
* _ottaa selvää_ "find out"
* _ottaa vaari(n)_ "take advice"
* _ottaa vastaan_ "receive"
* _painaa päälle_ "push, stress on"
* _panna merkille_ "take note"
* _panna täytäntöön_ "put into action"
* _pidellä kiinni_ "hold on"
* _pitää kaupan_ "keep for sale"
* _pitää kiinni_ "hold on"
* _pitää voimassa_ "keep valid"
* _pitää yllä_ "maintain"
* _päästä käsiksi_ "get one's hands on"
* _päästä läpi_ "get through"
* _päästää irti_ "let go"
* _saada aikaan_ "get sth done"
* _saada aikaiseksi_ "get sth done"
* _saada kiinni_ "catch"
* _saada läpi_ "get sth through"
* _saada vireille_ "get sth started"
* _tulla mukaan_ "come along" (In the sense of *follow*, not the social sense.)
* _tulla tarpeen_ "become necessary"
* _tulla vastaan_ "come across"
* _tulla voimaan_ "become valid"
