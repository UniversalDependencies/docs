---
layout: base
title:  'Statistics of csubj in UD_Latin-UDante'
udver: '2'
---

## Treebank Statistics: UD_Latin-UDante: Relations: `csubj`

This relation is universal.
There are 5 language-specific subtypes of `csubj`: <tt><a href="la_udante-dep-csubj-cleft.html">csubj:cleft</a></tt>, <tt><a href="la_udante-dep-csubj-outer.html">csubj:outer</a></tt>, <tt><a href="la_udante-dep-csubj-pass.html">csubj:pass</a></tt>, <tt><a href="la_udante-dep-csubj-relcl.html">csubj:relcl</a></tt>, <tt><a href="la_udante-dep-csubj-reported.html">csubj:reported</a></tt>.

452 nodes (1%) are attached to their parents as `csubj`.

329 instances of `csubj` (73%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.51548672566372.

The following 18 pairs of parts of speech are connected with `csubj`: <tt><a href="la_udante-pos-VERB.html">VERB</a></tt>-<tt><a href="la_udante-pos-VERB.html">VERB</a></tt> (206; 46% instances), <tt><a href="la_udante-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_udante-pos-VERB.html">VERB</a></tt> (74; 16% instances), <tt><a href="la_udante-pos-VERB.html">VERB</a></tt>-<tt><a href="la_udante-pos-NOUN.html">NOUN</a></tt> (29; 6% instances), <tt><a href="la_udante-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_udante-pos-VERB.html">VERB</a></tt> (27; 6% instances), <tt><a href="la_udante-pos-VERB.html">VERB</a></tt>-<tt><a href="la_udante-pos-ADJ.html">ADJ</a></tt> (26; 6% instances), <tt><a href="la_udante-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_udante-pos-NOUN.html">NOUN</a></tt> (22; 5% instances), <tt><a href="la_udante-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_udante-pos-ADJ.html">ADJ</a></tt> (13; 3% instances), <tt><a href="la_udante-pos-ADV.html">ADV</a></tt>-<tt><a href="la_udante-pos-VERB.html">VERB</a></tt> (13; 3% instances), <tt><a href="la_udante-pos-DET.html">DET</a></tt>-<tt><a href="la_udante-pos-NOUN.html">NOUN</a></tt> (10; 2% instances), <tt><a href="la_udante-pos-VERB.html">VERB</a></tt>-<tt><a href="la_udante-pos-DET.html">DET</a></tt> (10; 2% instances), <tt><a href="la_udante-pos-PRON.html">PRON</a></tt>-<tt><a href="la_udante-pos-VERB.html">VERB</a></tt> (5; 1% instances), <tt><a href="la_udante-pos-VERB.html">VERB</a></tt>-<tt><a href="la_udante-pos-PRON.html">PRON</a></tt> (5; 1% instances), <tt><a href="la_udante-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_udante-pos-DET.html">DET</a></tt> (3; 1% instances), <tt><a href="la_udante-pos-VERB.html">VERB</a></tt>-<tt><a href="la_udante-pos-ADV.html">ADV</a></tt> (3; 1% instances), <tt><a href="la_udante-pos-AUX.html">AUX</a></tt>-<tt><a href="la_udante-pos-VERB.html">VERB</a></tt> (2; 0% instances), <tt><a href="la_udante-pos-DET.html">DET</a></tt>-<tt><a href="la_udante-pos-VERB.html">VERB</a></tt> (2; 0% instances), <tt><a href="la_udante-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_udante-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="la_udante-pos-VERB.html">VERB</a></tt>-<tt><a href="la_udante-pos-AUX.html">AUX</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 7 csubj	color:blue
1	Et	et	CCONJ	co	_	4	cc	_	_
2	per	per	ADP	e	_	3	case	_	_
3	hoc	hic	DET	ddisna	Case=Acc|Gender=Neut|InflClass=LatPron|Number=Sing|PronType=Dem	4	obl	_	_
4	patet	pateo	VERB	va2*ips3	Aspect=Imp|InflClass=LatE|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	TraditionalMood=Indicativus|TraditionalTense=Praesens
5	quod	quod	SCONJ	cs	PronType=Rel	7	mark	_	_
6	Comedia	comedia	NOUN	sfs1n	Case=Nom|Gender=Fem|InflClass=IndEurA|NameType=Lit|Number=Sing|Proper=Yes	7	xcomp	_	_
7	dicitur	dico	VERB	vp3ips3	Aspect=Imp|InflClass=LatX|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	4	csubj	_	TraditionalMood=Indicativus|TraditionalTense=Praesens
8	presens	praesum	VERB	ans2n	Aspect=Imp|Case=Nom|Gender=Neut|InflClass=LatAnom|InflClass[nominal]=IndEurI|Number=Sing|VerbForm=Part|Voice=Act	9	acl	_	TraditionalMood=Participium|TraditionalTense=Praesens
9	opus	opus	NOUN	sns3n	Case=Nom|Gender=Neut|InflClass=IndEurX|Number=Sing	7	nsubj:pass	_	SpaceAfter=No
10	.	.	PUNCT	Pu	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 csubj	color:blue
1	Sed	sed	CCONJ	co	_	7	cc	_	_
2	lac	lac	NOUN	sns3a	Case=Acc|Gender=Neut|InflClass=IndEurI|Number=Sing	6	obj	_	_
3	pastori	pastor	NOUN	sms3d	Case=Dat|Gender=Masc|InflClass=IndEurX|Number=Sing	6	obl	_	_
4	fors	fors	ADV	r	_	7	advmod	_	_
5	est	sum	AUX	va5ips3	Aspect=Imp|InflClass=LatAnom|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	cop	_	TraditionalMood=Indicativus|TraditionalTense=Praesens
6	mandare	mando	VERB	va1fp	Aspect=Imp|VerbForm=Inf|Voice=Act	7	csubj	_	TraditionalMood=Infinitivus|TraditionalTense=Praesens
7	superbum	superbus	ADJ	ans1n	Case=Nom|Gender=Neut|InflClass=IndEurO|Number=Sing	0	root	_	SpaceAfter=No
8	»	»	PUNCT	Pu	_	7	punct	_	SpaceAfter=No
9	.	.	PUNCT	Pu	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 11 csubj	color:blue
1	Constat	consto	VERB	va1*ips3	Aspect=Imp|InflClass=LatA|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	TraditionalMood=Indicativus|TraditionalTense=Praesens
2	igitur	igitur	PART	r	_	1	discourse	_	_
3	quod	quod	SCONJ	cs	PronType=Rel	11	mark	_	_
4	omne	omnis	DET	ans2n	Case=Nom|Gender=Neut|InflClass=IndEurI|Number=Sing|PronType=Tot	11	nsubj	_	_
5	quod	qui	PRON	presnn	Case=Nom|Gender=Neut|InflClass=LatPron|Number=Sing|PronType=Rel	7	nsubj	_	_
6	est	sum	AUX	va5ips3	Aspect=Imp|InflClass=LatAnom|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	cop	_	TraditionalMood=Indicativus|TraditionalTense=Praesens
7	bonum	bonum	NOUN	sns2n	Case=Nom|Gender=Neut|InflClass=IndEurO|Number=Sing	4	acl:relcl	_	_
8	per	per	ADP	e	_	9	case	_	_
9	hoc	hic	DET	ddisna	Case=Acc|Gender=Neut|InflClass=LatPron|Number=Sing|PronType=Dem	11	obl	_	_
10	est	sum	AUX	va5ips3	Aspect=Imp|InflClass=LatAnom|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	11	cop	_	TraditionalMood=Indicativus|TraditionalTense=Praesens
11	bonum	bonum	NOUN	sns2n	Case=Nom|Gender=Neut|InflClass=IndEurO|Number=Sing	1	csubj	_	SpaceAfter=No
12	:	:	PUNCT	Pu	_	16	punct	_	_
13	quod	quod	SCONJ	presnn	PronType=Rel	16	mark	_	_
14	in	in	ADP	e	_	15	case	_	_
15	uno	unus	DET	aunsb	Case=Abl|Gender=Neut|InflClass=LatPron|Number=Sing|NumType=Card|NumValue=1|PronType=Ind	16	obl:arg	_	_
16	consistit	consisto	VERB	va3ips3	Aspect=Imp|InflClass=LatX|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	11	conj:expl	_	SpaceAfter=No|TraditionalMood=Indicativus|TraditionalTense=Praesens
17	.	.	PUNCT	Pu	_	1	punct	_	_

~~~


