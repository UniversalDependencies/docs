---
layout: relation
title: 'compound'
shortdef: 'compound'
udver: '2'
---

UD Irish uses the `compound` relation for noun compounding. In Irish, when two nouns are compounded, the second is in the genitive case. While the definition of compound can vary depending on the literature, for UD we take the compound relation to refer to any two or more words that are closely bound together in describing a discrete entity. By discrete we mean a compound noun often has a different, or more specific meaning than the individual components combined. 

We currently define noun compounds as including compounding noun constructions. The absence of a definite article in certain noun-noun constructions may indicate whether a noun-noun construction is compound: where the noun dependent is indefinite, the construction is often compound, while the same construction with a definite noun dependent is often labelled as nmod. (i.e. deireadh seachtaine). Possible exception, example given below: ‘oifig an phoist’ -- depends on whether this construction is deemed non-compositional (office of the post) or compositional (Post Office).

Another indication that the construction might be a compound noun is if the combination of both nouns together gives a meaning that is different in some way to the individual meaning of both words
Mac tíre (lit. ‘son of the land’) ‘wolf’

If a noun-noun construction contains a word that does not occur outside of that specific construction, that is a strong indicator that the construction should be labelled as compound.
Cúig déag (lit. ‘five teen’) ‘fifteen’


### Examples

_Oifig an <b>Phoist</b>_ `<b>Post</b> Office'   (lit. Office of_the Post)

~~~ sdparse
ag cosaint na n-oifigí poist tuaithe \n at protecting the offices post country
compound(n-oifigí, poist)
~~~


