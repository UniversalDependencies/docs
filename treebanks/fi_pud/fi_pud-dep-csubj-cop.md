---
layout: base
title:  'Statistics of csubj:cop in UD_Finnish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Finnish-PUD: Relations: `csubj:cop`

This relation is a language-specific subtype of <tt><a href="fi_pud-dep-csubj.html">csubj</a></tt>.

14 nodes (0%) are attached to their parents as `csubj:cop`.

14 instances of `csubj:cop` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.78571428571429.

The following 3 pairs of parts of speech are connected with `csubj:cop`: <tt><a href="fi_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_pud-pos-VERB.html">VERB</a></tt> (7; 50% instances), <tt><a href="fi_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fi_pud-pos-VERB.html">VERB</a></tt> (6; 43% instances), <tt><a href="fi_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fi_pud-pos-ADJ.html">ADJ</a></tt> (1; 7% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 10 csubj:cop	color:blue
1	Retkikuntaa	retkikunta	NOUN	_	Case=Par|Number=Sing	2	obj	_	_
2	johti	johtaa	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
3	kenraali	kenraali	NOUN	_	Case=Nom|Number=Sing	4	compound:nn	_	_
4	Joseph	Joseph	PROPN	_	Case=Nom|Number=Sing	2	nsubj	_	_
5	Burgoyne	Burgoyne	PROPN	_	Case=Nom|Number=Sing	4	flat:name	_	SpaceAfter=No
6	,	,	PUNCT	_	_	8	punct	_	_
7	jonka	joka	PRON	_	Case=Gen|Number=Sing|PronType=Rel	8	nmod:poss	_	_
8	tavoitteena	tavoite	NOUN	_	Case=Ess|Number=Sing	4	acl:relcl	_	_
9	oli	olla	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	8	cop	_	_
10	päästä	päästä	VERB	_	InfForm=1|Number=Sing|VerbForm=Inf|Voice=Act	8	csubj:cop	_	_
11	Albanyyn	Albany	PROPN	_	Case=Ill|Number=Sing	10	obl	_	SpaceAfter=No
12	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 11 csubj:cop	color:blue
1	”	”	PUNCT	_	_	5	punct	_	SpaceAfter=No
2	Norman	Norman	PROPN	_	Case=Gen|Number=Sing	5	nsubj:cop	_	_
3	on	olla	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	5	cop	_	_
4	hyvä	hyvä	ADJ	_	Case=Nom|Degree=Pos|Number=Sing	5	amod	_	_
5	kaverini	kaveri	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=1	0	root	_	SpaceAfter=No
6	,	,	PUNCT	_	_	10	punct	_	_
7	joten	joten	ADV	_	_	10	advmod	_	_
8	oli	olla	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	10	cop	_	_
9	tosi	tosi	ADV	_	_	10	advmod	_	_
10	kurjaa	kurja	ADJ	_	Case=Par|Degree=Pos|Number=Sing	5	acl:relcl	_	_
11	nähdä	nähdä	VERB	_	InfForm=1|Number=Sing|VerbForm=Inf|Voice=Act	10	csubj:cop	_	_
12	hänet	hän	PRON	_	Case=Acc|Number=Sing|Person=3|PronType=Prs	11	obj	_	_
13	siinä	se	PRON	_	Case=Ine|Number=Sing|PronType=Dem	14	det	_	_
14	tunnetilassa	tunne#tila	NOUN	_	Case=Ine|Number=Sing	11	obl	_	SpaceAfter=No
15	.	.	PUNCT	_	_	5	punct	_	SpaceAfter=No
16	”	”	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 7 csubj:cop	color:blue
1	On	olla	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	2	cop	_	_
2	mahdollista	mahdollinen	ADJ	_	Case=Par|Degree=Pos|Derivation=Llinen|Number=Sing	0	root	_	SpaceAfter=No
3	,	,	PUNCT	_	_	7	punct	_	_
4	että	että	SCONJ	_	_	7	mark	_	_
5	hemoglobiiniarvot	hemoglobiini#arvo	NOUN	_	Case=Nom|Number=Plur	7	nsubj:cop	_	_
6	ovat	olla	AUX	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	7	cop	_	_
7	normaaleita	normaali	ADJ	_	Case=Par|Degree=Pos|Number=Plur	2	csubj:cop	_	SpaceAfter=No
8	,	,	PUNCT	_	_	13	punct	_	_
9	mutta	mutta	CCONJ	_	_	13	cc	_	_
10	rautavarastot	rauta#varasto	NOUN	_	Case=Nom|Number=Plur	13	nsubj:cop	_	_
11	yleisesti	yleisesti	ADV	_	Derivation=Sti	13	advmod	_	_
12	ottaen	ottaa	ADV	_	_	11	fixed	_	_
13	vähäisiä	vähäinen	ADJ	_	Case=Par|Degree=Pos|Derivation=Inen|Number=Plur	7	conj	_	SpaceAfter=No
14	,	,	PUNCT	_	_	2	punct	_	_
15	Kanadan	Kanada	PROPN	_	Case=Gen|Number=Sing	16	nmod:poss	_	_
16	veripalvelu	veri#palvelu	NOUN	_	Case=Nom|Derivation=U|Number=Sing	17	compound:nn	_	_
17	CBS	CBS	PROPN	_	Case=Nom|Number=Sing	18	nsubj	_	_
18	sanoo	sanoa	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	2	parataxis	_	SpaceAfter=No
19	.	.	PUNCT	_	_	2	punct	_	_

~~~


