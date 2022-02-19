---
layout: relation
title:  'acl:relcl'
shortdef : 'relative clause modifier'
udver: '2'
---

A relative clause modifier of a nominal is a clause that modifies the nominal,
whereas the nominal is coreferential with a constituent inside the relative
clause (here the constituent may be realized as a relative pronoun, another
relative word, or it may not be overtly realized at all). The `acl:relcl`
relation points from the head of the modified nominal to the head of the
relative clause.

Depending on language, it may be required that relative clauses are finite.
For example, English non-finite clauses are traditionally not termed relative;
therefore, _the girl <b>that was born today</b>_ is a relative clause because
it is finite, while _the girl <b>born today</b>_ is non-finite (the participle
is not accompanied by a finite auxiliary) and it uses the plain [acl]()
relation. In other languages however, the distinction between finite and
non-finite clauses may not exist or may not be used as a criterion for relative
clauses.

~~~ sdparse
I saw the man you love
acl:relcl(man, love)
~~~

~~~ sdparse
I saw the book which you bought
acl:relcl(book, bought)
~~~
<!-- Interlanguage links updated St lis 3 20:58:34 CET 2021 -->
