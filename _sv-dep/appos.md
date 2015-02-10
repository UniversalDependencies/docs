---
layout: relation
title: 'appos'
shortdef: 'appositional modifier'
---

An appositional modifier of an NP is an NP immediately to the right of the first NP that serves to define or modify that NP. It includes parenthesized examples, as well as defining abbreviations in one of these structures. 

~~~ sdparse
Olle , min bror , kom \n Olle , my brother , arrived
appos(Olle, bror)
~~~

~~~ sdparse
Sebastian ( Davids kusin ) \n Sebastian ( David 's cousin )
appos(Sebastian, kusin)
~~~

~~~ sdparse
Svensk Kärnbränslehantering AB , SKB \n Swedish Nuclear Fuel and Waste Management Company (SKB)
appos(AB, SKB)
~~~
