---
layout: relation
title: 'punct'
shortdef: 'punctuation'
udver: '2'
---

This element is used for any piece of punctuation in a clause. The last punctuation mark of the sentence (usually a full stop or interrogative/exclamation mark) always depends on the root; within the relevant unit, a punctuation mark is attached at the highest possible node that preserves projectivity. In general, tokens with the relation <code>punct</code> always attach to content words (except in cases of ellipsis) and can never have dependents on their own.

~~~ sdparse
თქუ ნურაჲ გმობაჲ ღმრთისა მიმართ და მოჰკუდე. /n 'Speak no blasphemy against God and die.'
punct(თქუ, .)
~~~
~~~ sdparse
რაჲ უქმნიეს კაცსა ამას მღდელსა შუენიერსა, რამეთუ წარმოადგინეთ ჩემ წინაშე, ვითარცა ძჳრისმოქმედი? /n 'What have you done to this man, O fair priest, that you have brought him before me as an evildoer?'.
punct(უქმნიეს, ,)
punct(წარმოადგინეთ, ,)
punct(უქმნიეს, ?)
~~~
~~~ sdparse
ჵ, სიბოროტე ეშმაკისაჲ, რამეთუ ლესული არს მახჳლი! /n 'Oh, the evil of the devil, for the sword is sharpened!'
punct(სიბოროტე, ,)
punct(ლესული, !)
~~~

A punctuation mark separating coordinated units is attached to the following conjunct.

~~~ sdparse
ეჰა, სიყუარული მეუღლისაჲ, ერთობაჲ! /n 'Ah, the love of a spouse, unity!'
punct(სიყუარული, ,-2)
punct(ერთობაჲ, ,-4)
~~~

Paired punctuation marks (e.g. quotes and brackets, sometimes also dashes, commas and other) are attached to the same word unless that would create non-projectivity. This word is usually the head of the phrase enclosed in the paired punctuation.

~~~ sdparse
ამისთჳს გამცნებს შენ წინაწარმეტყუელი, ვითარმედ: "ცოლისა შენისაგან ეკრძალე და საიდუმლოსა შენსა ნუ უთხრობ მას". /n 'Therefore the prophet warns you: "Beware of your wife and do not tell her your secret"'
punct(ეკრძალე, " -6)
punct(ეკრძალე, " -15)
~~~

<!-- Interlanguage links updated St 6. května 2026, 20:48:37 CEST -->
