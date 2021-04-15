---
layout: relation
title: 'csubj:cleft'
shortdef: 'clausal residual subject of a cleft sentence'
udver: '2'
---

Cleft sentences arise when an element (i.e. a phrase) in a matrix clause is extracted for emphasis and put into a prominent position with respect to the other elements of the clause.

In Latin, cleft sentences are sentences that have the structure of a non-verbal, [copular](la-dep/cop) predication where the extracted element is in topical position as the non-verbal predicate, and the residual elements of the matrix clause act together as the [subject](la-dep/nsubj), which can be introduced by a nominal element (cf. [`nsubj:cleft`](la-dep/nsubj-cleft)) or be left merely [clausal](la-dep/csubj), without an antecedent. The copula usually agrees with the extracted element (mostly in the third person singular).

In the subject of a cleft sentence, the gap left by the extracted phrase is recovered by means of a relative element, usually a pronoun (e.g. *qui*, *ubi*) but also possibly a determiner (e.g. *qualis*). This element is put in first position and morphosyntactically acts the same way the original phrase did (i.e. same case, number, gender...). A cleft sentence with clausal residual subject is thus characterised by the apparent mismatch of a relative clause which does not actually act in an attributive function with respect to the non-verbal predicate and does not have an antecedent.  

Any kind of phrase at any nesting level can be extracted; sometimes the cleft subject will be introduced by a [complementiser](la-dep/ccomp), or some other minor adjustments are introduced in order for the sentence to be grammatically acceptable.

In the following examples, *|* points to the splitting point in the cleft sentence.


~~~ sdparse
ROOT Hic est | quem Petrus , Dei vicarius , honorificare nos monet ; quem Clemens , nunc Petri successor , luce Apostolice benedictionis illuminat ; ut ubi radius spiritualis non sufficit , ibi splendor minoris luminaris illustret . \n ROOT This is whom Peter , of-God vicar , to-honour us reminds ; whom Clemens , now of-Peter successor , with-light Apostolic of-blessing lightens ; so-that where ray spiritual not suffices , there splendor minor of-luminary illuminate .
root(ROOT-1,Hic)
csubj:cleft(Hic,monet)
cop(Hic,est)
obj(honorificare,quem-5)
conj(monet,illuminat)
obj(illuminat,quem-15)
root(ROOT-41,This)
csubj:cleft(This,reminds)
cop(This,is)
obj(to-honour,whom-44)
conj(reminds,illuminate)
obj(illuminate,whom-54)
~~~

'This is he whom Peter, the Vicar of God, exhorts us to honour, and whom Clement, the present successor of Peter, illumines with the light of the Apostolic benediction; [so] that where the spiritual ray suffices not, there the splendour of the lesser luminary may lend its light.' (*Letters* V, UDante)

* Matrix clauses:   
    * *Petrus, Dei vicarius, monet nos **hunc** honorificare.* (object argument)
    * *Clemens, nunc Petri successor, luce Apostolice benedictionis **hunc** illuminat.* (object argument)
* Note that in the first conjunct the [object](la-dep/object) *hunc* 'him' is extracted from the clausal complement of *monet* 'he exhorts' headed by *honorificare* 'to honour', i.e. from a nested argument.
* 

~~~ sdparse
ROOT Hic est | apud quem cubitum ponitis . \n ROOT This is by whom elbow ye-set-down .
root(ROOT-1,Hic)
csubj:cleft(Hic,ponitis)
cop(Hic,est)
root(ROOT-11,This)
csubj:cleft(This,ye-set-down)
cop(This,is)
~~~

'It is at this man’s table that you are dining.' (*Satyricon*, C. Petronius)

* Matrix clause:
    * *Apud **hunc** cubitum ponitis.* ([oblique](la-dep/obl) argument)
*  

~~~ sdparse
ROOT Hanc domum | iam multos annos est | cum possideo et colo . \n ROOT This house already many years is when I-own and I-tend .
root(ROOT-1,annos)
csubj:cleft(annos,possideo)
cop(annos,est)
mark(possideo,cum)
root(ROOT-16,years)
csubj:cleft(years,I-own)
cop(years,is)
mark(I-own,when)
~~~

'This house, it is many years that I own it and live in it.' (*Aulularia*, Plautus)

* Matrix clause:
    * *Hanc domum **iam multos annos** possideo et colo.* (temporal [oblique](la-dep/obl) argument)
* *hanc domum* 'this house' is itself dislocated at the beginning of the sentence, but belongs to the clausal subject. This is probably an example of Latin as it was actually spoken.

####References

* Goria, E. (2013). *Towards a taxonomy of Latin cleft sentences*, Journal of Latin Linguistics, 12(2): 147 – 172



