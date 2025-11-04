---
layout: relation
title: 'nmod:spec'
shortdef: 'container content'
udver: '2'
---

The `nmod:spec` relation is a specialization of `nmod` used for NOUN modifiers that specify which part of a NOUN is being addressed. In other words, in the nmod:spec relation the head is the container and the dependent is the content (a container/content relation). 

~~~ sdparse
Volume III, Chapter 9, Paragraph 3
nmod:spec(Volume, Chapter)
nmod:spec(Chapter, Paragraph)
~~~

The same meaning may be conveyed by the inverse order of nouns, using traditional prepositioned nmod (a content/container relation).

~~~ sdparse
Paragraph 3 of the Chapter 9 of the Volume III
nmod(Paragraph, Chapter)
nmod(Chapter, Volume)
~~~ 

This relation is very useful to annotate law texts, which make references to other laws. 

~~~ sdparse
A Presidência de o Tribunal de Justiça publica , para conhecimento , as Súmulas aprovadas por o Colendo Órgão Especial , em os termos de o artigo 188 , §§ 3º e 4º , de o Regimento Interno . \n The Presidency of the Court of Justice publishes , for information purposes , the Summaries approved by the Honourable Special Court , pursuant to Article 188 , paragraphs 3 and 4 , of the Internal Regulations .
nmod:spec(188, §§)
~~~

~~~ sdparse
A solidariedade em essa hipótese decorre de a dicção dos arts. 3º , inc. IV , e 14 , § 1º , da Lei 6.398/1981 .  \n Solidarity in this case stems from the wording of Articles 3 , item IV , and 14 , § 1 , of Law 6398/1981 . 
nmod:spec(3º, inc.)
nmod:spec(14, §)
~~~
