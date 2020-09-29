---
layout: relation
title: 'compound'
shortdef: 'compound'
---

`compound` is one of the three relations in UD for compounding. It is used for noun compounds (e.g., *phone book*), but also for verb and adjective compounds as well as for “phrasal verb” constructions (e.g., *throw up*), which in Basque are expressions such as *gora egin* (*go up*), for example:

*Kazetariak aztoratuta ibili ziren atzo **Euskadi Fundazioak** Derion duen egoitzaren atarian .*

*Journalists were rowdy yesterday in the entrace of the officce that **Euskadi Foundation** has in Derio .* 

~~~ sdparse
Kazetariak aztoratuta ibili ziren atzo Euskadi Fundazioak Derion duen egoitzaren atarian .\n Journalists rowdy were yesterday Euskadi Foundation Derio_in has_that officce_of entrace_the_in . 

nsubj(aztoratuta-2, Kazetariak-1)
cop(aztoratuta-2, ibili-3)
aux(ibili-3, ziren-4)
advmod(ibili-3, atzo-5)
compound(Fundazioak-7, Euskadi-6)
nsubj(duen-9, Fundazioak-7)
nmod(duen-9, Derion-8)
acl(egoitzaren-10, duen-9)
nmod(atarian-11, egoitzaren-10)
nmo(ibili-3, atarian-11)
punct(ibili-3, .-12)
~~~

***Izan ere** zerbait gehiago behar da nirekin bukatzeko .*

***In fact** something esle is needed in order to end with me .* 

~~~ sdparse
Izan ere zerbait gehiago behar da nirekin bukatzeko . \n In fact something esle needed is me_with end_in_order_to  . 

compound(ere-2, Izan-1)
nmod(da-6, ere-2)
det(zerbait-3, gehiago-4)
nsubj(da-6, zerbait-3)
compound(da-6, behar-5)
nmod(bukatzeko-8, nirekin-7)
advcl(da-6, bukatzeko-8)
punct(da-6, .-)
~~~
<!-- Interlanguage links updated Út zář 29 20:43:12 CEST 2020 -->
