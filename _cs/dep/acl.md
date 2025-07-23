---
layout: relation
title: 'acl'
shortdef: 'clausal modifier of noun'
udver: '2'
---

`acl` stands for finite and non-finite clauses that modify a nominal.  The `acl` relation
contrasts with the [advcl]() relation, which is used for adverbial clauses
that modify a predicate. The head of the `acl` relation is the noun
that is modified, and the dependent is the head of the clause that
modifies the noun.

Note that a major subtype of adnominal clauses is relative clauses, which have their own relation label, [acl:relcl]().
Plain `acl` should not be used in annotation of relative clauses.

Previously, this relation was also used for optional depictives.
Following a [guidelines amendment](/changes.html) in May 2022, optional depictives should now be analyzed as [advcl]().

Czech also allows finite clausal complements for nouns with
a subset of nouns like *fact* or *report*.
These look roughly like relative clauses, but do not have any omitted role in the dependent clause.
These are also analyzed as `acl`.

~~~ sdparse
Příčinou není fakt , že by kina navštívilo víc diváků . \n Cause is-not the-fact , that would cinemas visit more filmgoers .
acl(fakt, navštívilo)
acl(the-fact, visit)
~~~

Some nouns also occur with infinitival complements, which are analyzed as adnominal clauses.

~~~ sdparse
Nebyl zájem navýšit podporu tohoto sektoru . \n There-was-no interest to-increase support of-this sector .
acl(zájem, navýšit)
acl(interest, to-increase)
~~~

<!-- Interlanguage links updated So 10. května 2025, 18:14:42 CEST -->
