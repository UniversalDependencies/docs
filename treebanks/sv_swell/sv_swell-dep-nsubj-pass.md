---
layout: base
title:  'Statistics of nsubj:pass in UD_Swedish-SweLL'
udver: '2'
---

## Treebank Statistics: UD_Swedish-SweLL: Relations: `nsubj:pass`

This relation is a language-specific subtype of <tt><a href="sv_swell-dep-nsubj.html">nsubj</a></tt>.
There are also 1 other language-specific subtypes of `nsubj`: <tt><a href="sv_swell-dep-nsubj-outer.html">nsubj:outer</a></tt>.

47 nodes (1%) are attached to their parents as `nsubj:pass`.

41 instances of `nsubj:pass` (87%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.93617021276596.

The following 4 pairs of parts of speech are connected with `nsubj:pass`: <tt><a href="sv_swell-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_swell-pos-NOUN.html">NOUN</a></tt> (22; 47% instances), <tt><a href="sv_swell-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_swell-pos-PRON.html">PRON</a></tt> (22; 47% instances), <tt><a href="sv_swell-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_swell-pos-PROPN.html">PROPN</a></tt> (2; 4% instances), <tt><a href="sv_swell-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sv_swell-pos-PRON.html">PRON</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 nsubj:pass	color:blue
1	Vi	vi	PRON	_	Case=Nom|Definite=Def|Gender=Com|Number=Plur|PronType=Prs	3	nsubj	_	_
2	är	vara	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	3	cop	_	_
3	medvetna	medveten	ADJ	_	Case=Nom|Definite=Ind|Degree=Pos|Number=Plur	0	root	_	_
4	att	att	SCONJ	_	_	6	mark	_	_
5	miljön	miljö	NOUN	_	Case=Nom|Definite=Def|Gender=Com|Number=Sing	6	nsubj:pass	_	_
6	förstörs	förstöra	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Pass	3	advcl	_	_
7	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 nsubj:pass	color:blue
1	Enligt	enligt	ADP	_	_	3	case	_	_
2	åklagaren	åklagare	NOUN	_	Case=Nom|Definite=Def|Gender=Com|Number=Sing	3	nmod	_	_
3	Hediye	Hediye	PROPN	_	Case=Nom	6	obl	_	_
4	Kurt	Kurt	PROPN	_	Case=Nom	3	flat:name	_	_
5	de	de	PRON	_	Case=Nom|Definite=Def|Number=Plur|PronType=Prs	6	nsubj:pass	_	_
6	planeras	planera	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	_	CorrectionLabels=M-Verb;S-FinV
7	tillsammans	tillsammans	ADV	_	_	6	advmod	_	_
8	.	.	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 nsubj:pass	color:blue
1	Till	till	ADP	_	_	2	case	_	_
2	slut	slut	NOUN	_	Case=Nom|Definite=Ind|Gender=Neut|Number=Sing	3	obl	_	_
3	nödgas	nödga	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	_	_
4	Johan	Johan	PROPN	_	Case=Nom	3	nsubj:pass	_	_
5	att	att	PART	_	_	6	mark	_	_
6	bekänna	bekänna	VERB	_	VerbForm=Inf|Voice=Act	3	xcomp	_	_
7	en	en	DET	_	Definite=Ind|Gender=Com|Number=Sing|PronType=Art	8	det	_	_
8	skuld	skuld	NOUN	_	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	6	obj	_	CorrectionLabels=L-W
9	som	som	PRON	_	PronType=Rel	11	obj	_	_
10	han	han	PRON	_	Case=Nom|Definite=Def|Gender=Com|Number=Sing|PronType=Prs	11	nsubj	_	_
11	gör	göra	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	8	acl:relcl	_	CorrectionLabels=M-Verb
12	inte	inte	PART	_	_	11	advmod	_	CorrectionLabels=S-Adv|Polarity=Neg
13	.	.	PUNCT	_	_	3	punct	_	_

~~~


