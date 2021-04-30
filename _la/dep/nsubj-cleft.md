---
layout: relation
title: 'nsubj:cleft'
shortdef: 'nominal residual subject of a cleft sentence'
udver: '2'
---

Cleft sentences arise when a phrase in a matrix clause is extracted for emphasis and put into a prominent position with respect to the other elements of the clause (cf. [`csubj:cleft`](la-dep/csubj-cleft)).

When the relative clause acting as the subject of a cleft sentence does have an antecedent, we have a nominal type of subject; if not, the subject will be treated as [clausal](la-dep/csubj-cleft). This construction can appear with any extracted argument, and is obligatory if the extracted element is a modifier of another element in the original matrix clause, in which case the antecedent will (usually) correspond to the originally modified element.

As with clausal subjects, some minor readjustments in the components of the cleft sentence may be needed to make the whole sentence grammatical.

In the following example, *\|* points to the splitting point in the cleft sentence.

~~~ sdparse
ROOT Fuit ergo hebraicum ydioma | illud quod primi loquentis labia fabricarunt . \n ROOT Was so Hebrew language that which first of-the-speaking lips they-made .
root(ROOT-1,ydioma)
amod(ydioma,hebraicum)
nsubj:cleft(ydioma,illud)
cop(ydioma,Fuit)
acl:relcl(illud,fabricarunt)
obj(fabricarunt,quod)
root(ROOT-15,language)
amod(language,Hebrew)
nsubj:cleft(language,that)
cop(language,Was)
acl:relcl(that,they-made)
obj(they-made,which)
~~~

'So the Hebrew language was that which the lips of the first speaker moulded.' (*De Vulgari Eloquentia*, UDante)

* Matrix clause:   
    * *Primi loquentis labia **hebraicum ydioma** fabricarunt.* (object argument)

~~~ sdparse
ROOT Ego sum | ille qui longas terras et ignotas regiones peragravi , ego | ille qui tam longe abieram ut in patriam redire non possem . \n ROOT I am that who long lands and unknown regions I-have-traversed , I that who so long I-had-went-away so-that in fatherland to-go-back not may .
root(ROOT-1,Ego)
nsubj:cleft(Ego,ille-5)
cop(Ego,sum)
acl:relcl(ille-5,peragravi)
nsubj(peragravi,qui-6)
conj(Ego,ego)
nsubj:cleft(ego,ille-16)
acl:relcl(ille-16,abieram)
nsubj(abieram,qui-17)
root(ROOT-29,I-30)
nsubj:cleft(I-30,that-32)
cop(I-30,am)
acl:relcl(that-32,I-have-traversed)
nsubj(I-have-traversed,who-33)
conj(I-30,I-41)
nsubj:cleft(I-41,that-42)
acl:relcl(that-42,I-had-went-away)
nsubj(I-had-went-away,who-43)
~~~

'I am the one who went through faraway and unknown lands, me who got so far that I could not even return home.' (*Declamationes*, Quintilian)

* Matrix clauses:   
    * *(**Ego**) longas terras et ignotas regiones peragravi.* (subject argument)
    * *(**Ego**) tam longe abieram ut in patriam redire non possem.* (subject argument)
* Note that the second conjunct shows ellipsis of the copula. 
* The subject does not need to be made explicit in Latin, but can be extracted nonetheless.

###References

* Goria, E. (2013). *Towards a taxonomy of Latin cleft sentences*, Journal of Latin Linguistics, 12(2): 147 – 172