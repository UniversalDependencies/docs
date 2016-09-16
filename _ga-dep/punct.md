---
layout: relation
title: 'punct'
shortdef: 'punctuation'
---


This is used for any piece of punctuation in a clause, regardless of its function. The punctuation mark is attached to the head of the phrase or clause to which it belongs unless this introduces a non-projective dependency. More discussion on punctuation can be found on the universal dependency page ([u-dep/punct]()).

### Example

_<b>`</b> Tá an méid sin suimiúil a d' inis tú dom <b>,</b> <b>'</b> a dúirt sé <b>.</b>_ `<b>`</b> What you have told me is interesting <b>,</b><b>'</b> he said to me<b>.</b>'



~~~ sdparse
` Tá an méid sin suimiúil a d' inis tú dom , ' a dúirt sé . \n ' Is the amount DEM interesting [] [] told you to_me , ' [] said he .
punct(dúirt, `)
punct(dúirt, ,)
punct(dúirt, ')
punct(dúirt, .)
~~~
