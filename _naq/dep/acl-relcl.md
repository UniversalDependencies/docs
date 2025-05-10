---
layout: relation
title: 'acl:relcl'
shortdef: 'relative clause modifier'
udver: '2'
---

A relative clause modifier of a nominal is a clause that modifies the nominal, whereas the nominal is coreferential with a constituent inside the relative clause. This constituent may be realized as a person-gender-number clitic at the end of the clause or it may not be overtly realized at all. The `acl:relcl` relation points from the head of the modified nominal to the head of the relative clause.

~~~ conllu
# visual-style 5 1 nsubj color:blue
# visual-style 1 6 ref color:blue
1	tsaoǃoreb	tsaoǃore	NOUN	_	Case=Nom|Gender=Masc|Number=Sing|Person=3	0	root	5:nsubj	_
2	hîa	hîa	SCONJ	REL	_	5	mark	_	_
3	mûǂuidaos	mûǂuidao	NOUN	_	Case=Nom|Gender=Fem|Number=Sing|Person=3	5	obl	_	_
4	ai	_	ADP	_	_	3	case	_	_
5-6	mâb	_	_	_	_	_	_	_	_
5	mâ	mâ	VERB	_	Voice=Act	1	acl:relcl	_	_
6	b	_	PRON	REL	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Rel	5	nsubj	1:ref	_

# visual-style 5 1 nsubj color:blue
# visual-style 1 6 ref color:blue
1	ashtray-3M.SG	_	_	_	_	0	root	5:nsubj	_
2	REL	_	_	_	_	5	mark	_	_
3	windowsill	_	_	_	_	5	obl	_	_
4	on	_	_	_	_	3	case	_	_
5	stand	_	_	_	_	1	acl:relcl	_	_
6	3M.SG	_	_	_	_	5	nsubj	1:ref	_
~~~

~~~ conllu
# visual-style 2 3 nsubj color:blue
1	ǀguri	ǀguri	ADV	_	_	2	advmod	_	_
2	hâ	hâ	VERB	_	Voice=Act	3	acl:relcl	_	_
3	tsūǃgâ-i	tsūǃgâ	NOUN	_	Case=Nom|Gender=Neut|Number=Sing|Person=3	0	root	2:nsubj	_

# visual-style 2 3 nsubj color:blue
1	alone	_	_	_	_	2	advmod	_	_
2	stand	_	_	_	_	3	acl:relcl	_	_
3	incident	_	_	_	_	0	root	2:nsubj	_
~~~

<!-- Interlanguage links updated So 10. května 2025, 18:14:45 CEST -->
