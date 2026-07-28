---
layout: base
title:  'Statistics of cop:own in UD_Finnish-FTB'
udver: '2'
---

## Treebank Statistics: UD_Finnish-FTB: Relations: `cop:own`

This relation is a language-specific subtype of <tt><a href="fi_ftb-dep-cop.html">cop</a></tt>.

131 nodes (0%) are attached to their parents as `cop:own`.

108 instances of `cop:own` (82%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.43511450381679.

The following 6 pairs of parts of speech are connected with `cop:own`: <tt><a href="fi_ftb-pos-PRON.html">PRON</a></tt>-<tt><a href="fi_ftb-pos-AUX.html">AUX</a></tt> (94; 72% instances), <tt><a href="fi_ftb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_ftb-pos-AUX.html">AUX</a></tt> (25; 19% instances), <tt><a href="fi_ftb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fi_ftb-pos-AUX.html">AUX</a></tt> (5; 4% instances), <tt><a href="fi_ftb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fi_ftb-pos-AUX.html">AUX</a></tt> (4; 3% instances), <tt><a href="fi_ftb-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_ftb-pos-AUX.html">AUX</a></tt> (2; 2% instances), <tt><a href="fi_ftb-pos-NUM.html">NUM</a></tt>-<tt><a href="fi_ftb-pos-AUX.html">AUX</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 cop:own	color:blue
1	Minulla	minä	PRON	Pron,Pers,Sg1,Ade	Case=Ade|Number=Sing|Person=1|PronType=Prs	0	root	_	Alt=nmod:own
2	on	olla	AUX	V,Act,Ind,Pres,Sg3	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	1	cop:own	_	Alt=cop:own
3	kiire	kiire	NOUN	N,Sg,Nom	Case=Nom|Number=Sing	1	nsubj:cop	_	Candidate=nsubj:exist
4	.	.	PUNCT	Pun	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 cop:own	color:blue
1	Työnarkomaanilla	työnarkomaani	NOUN	N,Sg,Ade	Case=Ade|Number=Sing	2	compound:nn	_	Alt=compound:nn
2	presidentillä	presidentti	NOUN	N,Sg,Ade	Case=Ade|Number=Sing	0	root	_	Alt=nmod:own
3	on	olla	AUX	V,Act,Ind,Pres,Sg3	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	2	cop:own	_	Alt=cop:own
4	muitakin	muu	DET	Pron,Qnt,Pl,Par,Kin	Case=Par|Clitic=Kin|Number=Plur|PronType=Ind	5	det	_	_
5	intohimoja	intohimo	NOUN	N,Pl,Par	Case=Par|Number=Plur	2	nsubj:cop	_	Candidate=nsubj:exist
6	elämässään	elämä	NOUN	N,Sg,Ine,Px3	Case=Ine|Number=Sing|Person[psor]=3	2	obl	_	_
7	.	.	PUNCT	Pun	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 cop:own	color:blue
1	Minulla	minä	PRON	Pron,Pers,Sg1,Ade	Case=Ade|Number=Sing|Person=1|PronType=Prs	0	root	_	Alt=nmod:own
2	on	olla	AUX	V,Act,Ind,Pres,Sg3	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	5	cop:own	_	Alt=cop:own
3	täällä	täällä	ADV	Adv,Dem	PronType=Dem	1	advmod	_	_
4	niin	niin	ADV	Adv,Pcle	_	5	advmod	_	_
5	hyvä	hyvä	ADJ	A,Sg,Nom	Case=Nom|Number=Sing	1	csubj:cop	_	Candidate=csubj:exist
6	olla	olla	VERB	V,Act,InfA,Lat	Case=Lat|InfForm=1|VerbForm=Inf|Voice=Act	5	acl	_	_
7	.	.	PUNCT	Pun	_	1	punct	_	_

~~~


