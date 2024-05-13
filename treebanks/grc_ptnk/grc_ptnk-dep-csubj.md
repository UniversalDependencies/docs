---
layout: base
title:  'Statistics of csubj in UD_Ancient_Greek-PTNK'
udver: '2'
---

## Treebank Statistics: UD_Ancient_Greek-PTNK: Relations: `csubj`

This relation is universal.
There are 1 language-specific subtypes of `csubj`: <tt><a href="grc_ptnk-dep-csubj-pass.html">csubj:pass</a></tt>.

18 nodes (0%) are attached to their parents as `csubj`.

14 instances of `csubj` (78%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.66666666666667.

The following 7 pairs of parts of speech are connected with `csubj`: <tt><a href="grc_ptnk-pos-VERB.html">VERB</a></tt>-<tt><a href="grc_ptnk-pos-VERB.html">VERB</a></tt> (6; 33% instances), <tt><a href="grc_ptnk-pos-ADJ.html">ADJ</a></tt>-<tt><a href="grc_ptnk-pos-VERB.html">VERB</a></tt> (5; 28% instances), <tt><a href="grc_ptnk-pos-AUX.html">AUX</a></tt>-<tt><a href="grc_ptnk-pos-VERB.html">VERB</a></tt> (2; 11% instances), <tt><a href="grc_ptnk-pos-NOUN.html">NOUN</a></tt>-<tt><a href="grc_ptnk-pos-VERB.html">VERB</a></tt> (2; 11% instances), <tt><a href="grc_ptnk-pos-ADJ.html">ADJ</a></tt>-<tt><a href="grc_ptnk-pos-ADV.html">ADV</a></tt> (1; 6% instances), <tt><a href="grc_ptnk-pos-ADJ.html">ADJ</a></tt>-<tt><a href="grc_ptnk-pos-PRON.html">PRON</a></tt> (1; 6% instances), <tt><a href="grc_ptnk-pos-PRON.html">PRON</a></tt>-<tt><a href="grc_ptnk-pos-PRON.html">PRON</a></tt> (1; 6% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 4 csubj	color:blue
1	παρ᾿	παρά	ADP	_	_	2	case	_	Gloss=+G=from;-+D=before;-+A=beside,along
2	ᾧ	ὅς	PRON	_	Case=Dat|Gender=Masc,Neut|Number=Sing|PronType=Rel	4	obl	_	Gloss=who,which,that
3	ἄν	ἄν	PART	_	_	4	mark	_	Gloss=whenever,whoever,whatever
4	εὑρεθῇ	εὑρίσκω	VERB	_	Aspect=Perf|Mood=Sub|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Pass	11	csubj	_	Gloss=to-find
5	τὸ	ὁ	DET	_	Case=Acc,Nom|Definite=Def|Gender=Neut|Number=Sing|PronType=Dem	6	det	_	Gloss=the
6	κόνδυ	κόνδυ	NOUN	_	Case=Acc,Nom|Gender=Neut|Number=Sing	4	obl	_	Gloss=drinking-cup
7	τῶν	ὁ	DET	_	Case=Gen|Definite=Def|Gender=Fem,Masc,Neut|Number=Plur|PronType=Dem	8	det	_	Gloss=the
8	παίδων	παῖς	NOUN	_	Case=Gen|Gender=Fem,Masc|Number=Plur	6	nmod	_	Gloss=child
9	σου	σύ	PRON	_	Case=Gen|Number=Sing|Person=2|PronType=Prs	8	nmod	_	Gloss=you,your|SpaceAfter=No
10	,	,	PUNCT	_	_	4	punct	_	_
11	ἀποθνῃσκέτω	ἀποθνήσκω	VERB	_	Aspect=Imp|Mood=Imp|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	Gloss=to-die|SpaceAfter=No
12	·	·	PUNCT	_	_	13	punct	_	_
13	καὶ	καί	CCONJ	_	_	17	cc	_	Gloss=and,also,even,then,next
14	ἡμεῖς	ἡμεῖς	PRON	_	Case=Nom|Number=Plur|Person=1|PronType=Prs	17	nsubj	_	Gloss=we
15	δὲ	δέ	CCONJ	_	_	17	cc	_	Gloss=but,and,however
16	ἐσόμεθα	εἰμί	AUX	_	Mood=Ind|Number=Plur|Person=1|Tense=Fut|VerbForm=Fin|Voice=Mid	17	cop	_	Gloss=to-be
17	παῖδες	παῖς	NOUN	_	Case=Nom|Gender=Masc|Number=Plur	11	conj	_	Gloss=children,male-servants
18	τῷ	ὁ	DET	_	Case=Dat|Definite=Def|Gender=Masc,Neut|Number=Sing|PronType=Dem	19	det	_	Gloss=the
19	κυρίῳ	κύριος	NOUN	_	Case=Dat|Gender=Masc|Number=Sing	17	iobj	_	Gloss=lord
20	ἡμῶν	ἡμεῖς	PRON	_	Case=Gen|Number=Plur|Person=1|PronType=Prs	19	nmod	_	Gloss=us,our|SpaceAfter=No
21	.	.	PUNCT	_	_	20	punct	_	_

~~~


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 15 csubj	color:blue
1	Καὶ	καί	CCONJ	_	_	2	cc	_	Gloss=and,also,even,then,next
2	εἶπεν	εἶπον	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|Voice=Act	0	root	_	Gloss=to-say
3	Νωεμὶν	Νωεμίν	PROPN	_	Gender=Fem	2	nsubj	_	Gloss=Naomi
4	πρὸς	πρός	ADP	_	_	5	case	_	Gloss=+D=at;-+A=to,toward
5	Ῥοὺθ	Ῥούθ	PROPN	_	Gender=Fem	2	obl	_	Gloss=Ruth
6	τὴν	ὁ	DET	_	Case=Acc|Definite=Def|Gender=Fem|Number=Sing	7	det	_	Gloss=the
7	νύμφην	νύμφη	NOUN	_	Case=Acc|Gender=Fem|Number=Sing	5	appos	_	Gloss=bride
8	αὐτῆς	αὐτός	PRON	_	Case=Acc|Gender=Fem|Number=Sing|PronType=Prs	7	nmod	_	Gloss=she,-self,same|SpaceAfter=No
9	,	,	PUNCT	_	_	10	punct	_	_
10	ἀγαθόν	ἀγαθός	ADJ	_	Case=Nom|Gender=Neut|Number=Sing	2	ccomp	_	Gloss=good|SpaceAfter=No
11	,	,	PUNCT	_	_	12	punct	_	_
12	θύγατερ	θυγάτηρ	NOUN	_	Case=Voc|Gender=Fem|Number=Sing	10	vocative	_	Gloss=daughter|SpaceAfter=No
13	,	,	PUNCT	_	_	12	punct	_	_
14	ὅτι	ὅτι	SCONJ	_	_	15	mark	_	Gloss=because,that-for
15	ἐπορεύθης	πορεύομαι	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=2|Tense=Past|Voice=Pass	10	csubj	_	Gloss=to-proceed,go,depart
16	μετὰ	μετά	ADP	_	_	18	case	_	Gloss=+G=with;-+A=after
17	τῶν	ὁ	DET	_	Case=Gen|Definite=Def|Gender=Fem,Masc,Neut|Number=Plur	18	det	_	Gloss=the
18	κορασίων	κοράσιον	NOUN	_	Case=Gen|Gender=Neut|Number=Plur	15	obl	_	Gloss=girl
19	αὐτοῦ	αὐτός	PRON	_	Case=Gen|Gender=Masc,Neut|Number=Sing|PronType=Prs	18	nmod	_	Gloss=he,she,it,-self,same|SpaceAfter=No
20	,	,	PUNCT	_	_	23	punct	_	_
21	καὶ	καί	CCONJ	_	_	23	cc	_	Gloss=and,also,even,then,next
22	οὐκ	οὐ	ADV	_	Polarity=Neg	23	advmod	_	Gloss=no,not
23	ἀπαντήσονταί	ἀπαντάω	VERB	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Fut|Voice=Mid	15	conj	_	Gloss=to-meet,encounter
24	σοί	σός	PRON	_	Case=Dat|Number=Sing|Person=2|PronType=Prs	23	iobj	_	Gloss=you
25	ἐν	ἐν	ADP	_	_	26	case	_	Gloss=in,on,by,with,to
26	ἀγρῷ	ἀγρός	NOUN	_	Case=Dat|Gender=Masc|Number=Sing	23	obl	_	Gloss=field,farm
27	ἑτέρῳ	ἕτερος	ADJ	_	Case=Dat|Gender=Masc,Neut|Number=Sing	26	amod	_	Gloss=other,another,next|SpaceAfter=No
28	.	.	PUNCT	_	_	27	punct	_	_

~~~


~~~ conllu
# visual-style 28	bgColor:blue
# visual-style 28	fgColor:white
# visual-style 26	bgColor:blue
# visual-style 26	fgColor:white
# visual-style 26 28 csubj	color:blue
1	καὶ	καί	CCONJ	_	_	2	cc	_	Gloss=and,also,even,then,next
2	κατέπιον	καταπίνω	VERB	_	Aspect=Perf|Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	Gloss=to-swallow-up
3	οἱ	ὁ	DET	_	Case=Nom|Gender=Masc|Number=Plur|PronType=Dem	5	det	_	Gloss=the
4	ἑπτὰ	ἑπτά	NUM	_	_	5	nummod	_	Gloss=seven
5	στάχυες	στάχυς	NOUN	_	Case=Nom|Gender=Masc|Number=Plur	2	nsubj	_	Gloss=head-of-grain
6	οἱ	ὁ	DET	_	Case=Nom|Gender=Masc|Number=Plur|PronType=Dem	7	det	_	Gloss=the
7	λεπτοὶ	λεπτός	ADJ	_	Case=Nom|Gender=Masc|Number=Plur	5	amod	_	Gloss=thin,small
8	καὶ	καί	CCONJ	_	_	9	cc	_	Gloss=and,also,even,then,next
9	ἀνεμόφθοροι	ἀνεμόφθορος	ADJ	_	Case=Nom|Gender=Fem,Masc|Number=Plur	7	conj	_	Gloss=blighted
10	τοὺς	ὁ	DET	_	Case=Acc|Definite=Def|Gender=Masc|Number=Plur|PronType=Dem	12	det	_	Gloss=the
11	ἑπτὰ	ἑπτά	NUM	_	_	12	nummod	_	Gloss=seven
12	στάχυας	στάχυς	NOUN	_	Case=Acc|Gender=Masc|Number=Plur	2	obj	_	Gloss=head-of-grain
13	τοὺς	ὁ	DET	_	Case=Acc|Definite=Def|Gender=Masc|Number=Plur|PronType=Dem	14	det	_	Gloss=the
14	καλοὺς	καλός	ADJ	_	Case=Acc|Gender=Masc|Number=Plur	12	amod	_	Gloss=good
15	καὶ	καί	CCONJ	_	_	17	cc	_	Gloss=and,also,even,then,next
16	τοὺς	ὁ	DET	_	Case=Acc|Definite=Def|Gender=Masc|Number=Plur|PronType=Dem	17	det	_	Gloss=the
17	πλήρεις	πλήρης	ADJ	_	Case=Acc,Nom|Gender=Fem,Masc|Number=Plur	14	conj	_	Gloss=full|SpaceAfter=No
18	.	.	PUNCT	_	_	2	punct	_	_
19	εἶπα	λέγω	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin|Voice=Act	2	conj	_	Gloss=to-speak,say
20	οὖν	οὖν	ADV	_	_	19	advmod	_	Gloss=now,therefore
21	τοῖς	ὁ	DET	_	Case=Dat|Definite=Def|Gender=Masc,Neut|Number=Plur|PronType=Dem	22	det	_	Gloss=the
22	ἐξηγηταῖς	ἐξηγητής	NOUN	_	Case=Dat|Gender=Masc|Number=Plur	19	iobj	_	Gloss=expositor|SpaceAfter=No
23	,	,	PUNCT	_	_	24	punct	_	_
24	καὶ	καί	CCONJ	_	_	26	cc	_	Gloss=and,also,even,then,next
25	οὐκ	οὐ	ADV	_	Polarity=Neg	26	advmod	_	Gloss=no,not
26	ἦν	εἰμί	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	2	conj	_	Gloss=to-be
27	ὁ	ὁ	DET	_	Case=Nom|Gender=Masc|Number=Sing|PronType=Dem	28	nsubj	_	Gloss=the;-oh
28	ἀπαγγέλλων	ἀπαγγέλλω	VERB	_	Aspect=Imp|Case=Nom|Gender=Masc|Number=Sing|Tense=Pres|VerbForm=Part|Voice=Act	26	csubj	_	Gloss=sending-news
29	μοι	ἐγώ	PRON	_	Case=Dat|Number=Sing|Person=1|PronType=Prs	28	iobj	_	Gloss=me|SpaceAfter=No
30	.	.	PUNCT	_	_	29	punct	_	_

~~~


