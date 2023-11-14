Modern Greek has the so-called Dative Genitive that also allows for clitic doubling. Dative Genitives are assigned the dependency [obl](). Similarly to the case of core arguments of verbs, when a coreferring dative genitive NP exists,  it is assigned the [obl]() dependency and the clitic the [exlp]() one,  otherwise the clitic is assigned the dependency [obl](). 

~~~ sdparse
Της Ελένης της βάφτισε το παιδί. 
expl(βάφτισε, της-3)
obl(έδωσε, Eλένης)
det(Ελένης, Της-1)
obj(βάφτισε, παιδί)
~~~

~~~ sdparse
Της βάφτισε το παιδί. 
obl(βάφτισε, της)
obj(βάφτισε, παιδί)
