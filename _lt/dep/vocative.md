---
layout: relation
title: 'vocative'
shortdef: 'vocative'
udver: '2'
---

The `vocative` relation is used to mark a dialogue participant addressed in a text (common in conversations, dialogue, emails, newsgroup postings, etc.). The `vocative` relation links the addressee’s name to its host sentence and depends on the head of the main clause. A `vocative` commonly co-occurs with a null subject. In Lithuanian, the addressee’s name must appear in the vocative case form.
~~~ sdparse
Ar supratot , studentai ? \n Did you-understand , students ?
vocative(supratot, studentai)
vocative(you-understand, students)
~~~

~~~ sdparse
Markai , ar eini kartu ? \n Mark , are-you-coming together ?
vocative(eini, Markai)
vocative(are-you-coming, Mark)
~~~

Note that vocatives that function as interjections are labeled [discourse]() and not `vocative`, for example, _Viešpatie, kas dabar bus? (Lord, what will happen now?)_
<!-- Interlanguage links updated St 12. listopadu 2025, 09:22:41 CET -->
