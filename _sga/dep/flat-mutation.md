---
layout: relation
title:  'flat:mutation'
shortdef : 'initial mutation'
udver: '2'
---

Many instances occur in manuscripts where a nasal, _<b>ṅ</b>_ or _<b>ṁ</b>_, will stand apart from both the following and preceding words. These can be sparated by spacing, or by enclosing puncta. While such nasals normally form the anlaut of the following word, this orthographic separation forces them to be treated as discrete tokens which are POS-tagged as particles. The `flat:mutation` relation is used in these cases.

Unlike ordinary `flat` relations, with `flat:mutation` the nasal is the dependent governed by the following word.

### Examples

_conducaid etargne <b>ṅ</b> dǽ_ “that you might understand the knowledge of God”

~~~ sdparse
co nducaid etargne ṅ dǽ \n that you_might_understand knowledge of_god
part:nas(dǽ, ṅ)
~~~

_doairchet allaa <b>ṁ</b> brithemnacte_ “the day of judgement has been foretold”

~~~ sdparse
do airchet allaa ṁ brithemnacte \n has_been_foretold the_day of_judgement
part:nas(brithemnacte, ṁ)
~~~

_in tan <b>·m·</b> bís_ “when there is”

~~~ sdparse
in tan ·m· bís \n the time does_be
part:nas(bís, ·m·)
~~~
