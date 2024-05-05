---
layout: relation
title: 'punct'
shortdef: 'punctuation'
udver: '2'
---

This element is used for any piece of punctuation in a clause. The last punctuation mark of the sentence (usually a full stop or interrogative/exclamation mark) always depends on the root; within the relevant unit, a punctuation mark is attached at the highest possible node that preserves projectivity. In general, tokens with the relation <code>punct</code> always attach to content words (except in cases of ellipsis) and can never have dependents on their own.

~~~ sdparse
შემოდგომის დღეები მიწურული იყო .
'Autumn days were over.'
punct(იყო, .)
~~~
~~~ sdparse
იცოდი ამის შესახებ ?
'Did you know about that?'.
punct(იცოდი, ?)
~~~
~~~ sdparse
უზომოდ მიხარია !..
'I am extremely happy!'
punct(მიხარია, !..)
~~~

A punctuation mark separating coordinated units is attached to the following conjunct.

~~~ sdparse
უცებ სულ ახლოს, სულ ღრმად, სულ ჩემში რაღაც აფართხალდა მტრედივით.
'Suddenly, very close, very deep, inside me, something flew like a dove.'
punct(ახლოს, ,-4)
punct(ღრმად, ,-7)
~~~

Paired punctuation marks (e.g. quotes and brackets, sometimes also dashes, commas and other) are attached to the same word unless that would create non-projectivity. This word is usually the head of the phrase enclosed in the paired punctuation.

~~~ sdparse
კომენტარები აღწერს მოსწავლის (და მისი ნამუშევრების) ძლიერ და სუსტ მხარეებს...
'Comments describe the strengths and weaknesses of the student (and his work)...'
punct(ნამუშევრების, ,-4)
punct(ნამუშევრების, ,-8)
~~~

<!-- Interlanguage links updated Ne 5. května 2024, 18:21:47 CEST -->
