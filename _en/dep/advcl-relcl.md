---
layout: relation
title:  'advcl:relcl'
shortdef : 'adverbial relative clause modifier'
udver: '2'
---

This relation applies to a relative clause that is adverbial in one of the following ways:

(1) It modifies a clause (as opposed to typical relative clauses, which are adnominal and use [acl:relcl]()).

For example, the antecedent is a clause in:

~~~ sdparse
I tried to explain myself – which was a bad idea
advcl:relcl(tried, idea)
nsubj(idea, which)
~~~

This phenomenon also figures in _it_-clefts.

For detailed discussion, see the English relative clause guidelines: [adverbial relatives](acl-relcl.html#adverbial-relative-clauses), [_it_-clefts](acl-relcl.html#it-clefts).

(2) It forms a free relative with a WH-adverb (_where_, _when_, _why_, _how_) as head:

~~~ sdparse
I looked where you were sitting
advcl:relcl(where, sitting)
advmod(looked, where)
~~~

See [details on free relatives](acl-relcl.html#free-relatives).

<!-- Interlanguage links updated Po 6. listopadu 2023, 21:42:19 CET -->
