---
layout: base
title:  'cop: copula'
---

# The treatment of copula verbs

The design philosophy of SD has been to maximize dependencies between
content words, and so we normally regard a copula verb like *be* as an
auxiliary modifier, even when its complement is an adjective or
predicative noun.  However, some people do not like this because then
the head of some sentences is no longer a verb. In the dependency
conversion software, you can ask for the copula to remain the head
when its complement is an adjective or noun by giving the flag
`-makeCopulaHead`. Uses of the verb be as in auxiliary in passives and
progressives will still be treated as a non-head auxiliary.

*Check out the source for this page [here](https://raw.githubusercontent.com/fginter/sdmanualtest/gh-pages/en-cop.md).*