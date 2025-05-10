---
layout: relation
title: 'flat:num'
shortdef: 'flat multiword number'
udver: '2'
---

The `flat:num` subtype of the `flat` relation is used to connect parts of a multi-word numeral that are not connected by a conjunction.

~~~ sdparse
ǀguiǀoadīsi khoesekaidīsi tsî hakadīsi ǀguiǀaǁî kuri \n one_thousand nine_hundred and forty one year
flat:num(ǀguiǀoadīsi, khoesekaidīsi)
flat:num(hakadīsi, ǀguiǀaǁî)
cc(hakadīsi, tsî)
conj(ǀguiǀoadīsi, hakadīsi)
nummod(ǀguiǀoadīsi, kuri)
flat:num(one_thousand, nine_hundred)
flat:num(forty, one)
cc(forty, and)
conj(one_thousand, forty)
nummod(one_thousand, year)
~~~
<!-- Interlanguage links updated So 10. května 2025, 18:15:35 CEST -->
