---
layout: relation
title: 'conj:expl'
shortdef: 'explicative conjunct'
udver: '2'
---

This subtype of the [co-ordination](u-dep/conj) relation (by itself not a *dependency* relation) is used for explicative conjuncts, that is, phrases that more in-depth explain, reformulate or expand upon another phrase in the preceding clause (or the whole clause itself). 

Even if, traditionally, explicative conjuncts are sometimes described as "appositions", they represent a more general construction than UD's [appos](la-dep/appos), which is limited to (almost) immediately adjoined noun phrases; while both are in a sense co-referential, explicative conjuncts differ from appositions mainly under the aspect that explicative conjuncts show to be at the same foregrounding level than the phrases they are related to (whereas `appos` rather implies background information). This makes them a subclass of co-ordination.

Any phrase can be the explicative conjunct of any other phrase, but it will show an alignment in its syntactic encoding towards the latter, e.g. a clausal explicative conjunct of a noun phrase will be usually introduced by a complementiser. The explicative conjunct, as any regular conjunct (or apposition), will recover the case of the expanded phrase, as far as this is applicable. The explicative conjunct may be elliptical.

Often, but not always, an explicative conjunct is introduced by a conjunctional element, which is coherently labeled as [`CCONJ`](la-pos/CCONJ) and bears the feature [`ConjType=Expl`](la-feat/ConjType), in parallel to this subrelation. In Late and Medieval Latin, the grammaticalised verbal phrases *scilicet* 'you may know' and *id est* 'that is' (sometimes [univerbated](la-feat/Compound)) are amongst the most common ones. The relation might also be pointed to by dedicated punctuation marks.

~~~ sdparse
et Adalbertus dux derexit misso suo , id est Aggelmanno , qui ambulaverunt ... \n and Adalbertus leader he-sent legate his , that is Agelmannus , who they-went ...
conj:expl(misso,Aggelmanno)
cc(Aggelmanno,id)
fixed(id,est)
conj:expl(legate,Agelmannus)
cc(Agelmannus,that)
fixed(that,is)
~~~

'And so *dux* Adalbertus sent his legate, that is Agelmannus, who went...' (LLCT)

~~~ sdparse
hoc igitur nomen homo , et de christo et de aliis hominibus dictum , semper eandem formam significat , scilicet naturam humanam . \n this then name man , and about Christ and about other men said , always the-same form-ACC means , that-is nature-ACC human .
conj:expl(formam,naturam)
cc(naturam,scilicet)
conj:expl(form-ACC,nature-ACC)
cc(nature-ACC,that-is)
~~~

'Therefore, this name "man" said of Christ and of other men always signifies the same form; namely, human nature.' (*Summa contra Gentiles*, ITTB)

~~~ sdparse
Neque sine ratione ipsum vulgare illustre decusamus adiectione secunda , videlicet ut id cardinale vocetur . \n Nor without reason itself vulgar illustrious we-decorate addition second , that-is that it cardinal be-called .
conj:expl(adiectione,vocetur)
cc(vocetur,videlicet)
mark(vocetur,ut)
conj:expl(addition,be-called)
cc(be-called,that-is)
mark(be-called,that)
~~~

'Nor are we without justification if we adorn this illustrious vernacular with our second epithet, by calling it "cardinal".' (*De Vulgari Eloquentia*, UDante)

~~~ sdparse
Sed Monarcha non habet quod possit optare : sua nanque iurisdictio terminatur Occeano solum : quod non contingit principibus aliis , quorum principatus ad alios terminantur , ut puta regis Castelle ad illum qui regis Aragonum . \n But Monarch not has what he-can choose : his in-fact jurisdiction is-ended by-Ocean only : what not touches to-rulers others , whose reigns to other are-ended , like for-example of-king of-Castille to that which of-king of-the-Aragonese .
conj:expl(habet,terminatur)
conj:expl(regis-30,terminantur)
cc(regis-30,puta)
mark(regis-30,ut)
orphan(regis-30,illum)
conj:expl(has,is-ended)
conj:expl(of-king-68,are-ended)
cc(of-king-68,for-example)
mark(of-king-68,like)
orphan(of-king-68,that)
~~~

'But there is nothing the monarch could covet, for his jurisdiction is bounded only by the ocean; whereas this is not the case with other rulers, whose sovereignty extends only as far as the neighbouring kingdom, as is the case, for instance, with the kings of Castille and of Aragon. ' (*De Monarchia*, UDante)

