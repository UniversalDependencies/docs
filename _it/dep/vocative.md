---
layout: relation
title: 'vocative'
shortdef: 'vocative'
udver: '2'
---

The <code>vocative</code> relation is used to mark a dialogue participant addressed in a text (common in conversations, dialogue, emails, newsgroup postings, etc.). 
The relation links the addressee’s name to its host sentence.

~~~ sdparse
Carissimi , ho ricevuto con grande piacere la vostra lettera 
vocative(ricevuto, Carissimi)
~~~
~~~ sdparse
Signor presidente , onorevoli colleghi , buon anno e buon nuovo millennio .
vocative(anno, Signor)
vocative(anno, colleghi)
~~~

If the nominal is clearly vocative in intent, it is preferable to use the <code>vocative</code> relation.

~~~ sdparse
Cittadini truffati da le piramidi , sostenete ci ancora e andate a protestare contro il Governo .
vocative(sostenete, Cittadini)
~~~

A <code>vocative</code> commonly co-occurs with a null subject.

~~~ sdparse
" Chirac , ricorda ti Hiroshima "
vocative(ricorda, Chirac)
~~~

The specialization [vocative:mention](vocative-mention) is used for Twitter @-mentions.


<!-- Interlanguage links updated Út zář 29 18:41:37 CEST 2020 -->
