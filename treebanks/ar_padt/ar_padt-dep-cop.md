---
layout: base
title:  'Statistics of cop in UD_Arabic-PADT'
udver: '2'
---

## Treebank Statistics: UD_Arabic-PADT: Relations: `cop`

This relation is universal.

462 nodes (0%) are attached to their parents as `cop`.

457 instances of `cop` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.3961038961039.

The following 8 pairs of parts of speech are connected with `cop`: <tt><a href="ar_padt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ar_padt-pos-AUX.html">AUX</a></tt> (212; 46% instances), <tt><a href="ar_padt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ar_padt-pos-AUX.html">AUX</a></tt> (201; 44% instances), <tt><a href="ar_padt-pos-X.html">X</a></tt>-<tt><a href="ar_padt-pos-AUX.html">AUX</a></tt> (26; 6% instances), <tt><a href="ar_padt-pos-NUM.html">NUM</a></tt>-<tt><a href="ar_padt-pos-AUX.html">AUX</a></tt> (14; 3% instances), <tt><a href="ar_padt-pos-DET.html">DET</a></tt>-<tt><a href="ar_padt-pos-AUX.html">AUX</a></tt> (5; 1% instances), <tt><a href="ar_padt-pos-PRON.html">PRON</a></tt>-<tt><a href="ar_padt-pos-AUX.html">AUX</a></tt> (2; 0% instances), <tt><a href="ar_padt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ar_padt-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="ar_padt-pos-PRON.html">PRON</a></tt>-<tt><a href="ar_padt-pos-PRON.html">PRON</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 cop	color:blue
1	لن	لَن	PART	F---------	_	3	advmod	3:advmod	Vform=لَن|Gloss=not|Root=lan|Translit=lan|LTranslit=lan
2	اكون	كَان	AUX	VISA-1MS--	Aspect=Imp|Gender=Masc|Mood=Sub|Number=Sing|Person=1|VerbForm=Fin|Voice=Act	3	cop	3:cop	Vform=أَكُونَ|Gloss=be,is,exist|Root=k_w_n|Translit=ʾakūna|LTranslit=kān
3	متشردا	مُتَشَرِّد	ADJ	A-----MS4I	Case=Acc|Definite=Ind|Gender=Masc|Number=Sing	0	root	0:root	Vform=مُتَشَرِّدًا|Gloss=homeless,displaced|Root=^s_r_d|Translit=mutašarridan|LTranslit=mutašarrid
4	بعد	بَعدَ	ADP	PI------4-	AdpType=Prep|Case=Acc	5	case	5:case	Vform=بَعدَ|Gloss=after,afterward,later,yet|Root=b_`_d|Translit=baʿda|LTranslit=baʿda
5	اليوم	يَوم	NOUN	N------S2D	Case=Gen|Definite=Def|Number=Sing	3	obl	3:obl:بَعدَ:gen	SpaceAfter=No|Vform=اَليَومِ|Gloss=day,today|Root=y_w_m|Translit=al-yawmi|LTranslit=yawm
6	"	"	PUNCT	G---------	_	3	punct	3:punct	SpaceAfter=No|Vform="|Translit="
7	.	.	PUNCT	G---------	_	3	punct	3:punct	Vform=.|Translit=.

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 11 cop	color:blue
1	ب	بِ	ADP	P---------	AdpType=Prep	2	case	2:case	Vform=بِ|Gloss=by,with|Root=bi|Translit=bi|LTranslit=bi
2	معنى	مَعنَى	NOUN	N------S2I	Case=Gen|Definite=Ind|Number=Sing	0	root	0:root	Vform=مَعنًى|Gloss=meaning,sense,concepts,nuances|Root=`_n_y|Translit=maʿnan|LTranslit=maʿnā
3	آخر	آخَر	ADJ	A-----MS2I	Case=Gen|Definite=Ind|Gender=Masc|Number=Sing	2	amod	2:amod	Vform=آخَرَ|Gloss=other,another|Root='__h_r|Translit=ʾāḫara|LTranslit=ʾāḫar
4	ان	أَنَّ	SCONJ	C---------	_	9	cc	9:cc	Vform=أَنَّ|Gloss=that|Root='_n|Translit=ʾanna|LTranslit=ʾanna
5	دور	دَور	NOUN	N------S4R	Case=Acc|Definite=Cons|Number=Sing	9	nsubj	9:nsubj|12:nsubj	Vform=دَورَ|Gloss=role,part|Root=d_w_r|Translit=dawra|LTranslit=dawr
6	نا	هُوَ	PRON	SP---1MP2-	Case=Gen|Gender=Masc|Number=Plur|Person=1|PronType=Prs	5	nmod	5:nmod:gen	Vform=نَا|Gloss=he,she,it|Translit=nā|LTranslit=huwa
7	الاساسي	أَسَاسِيّ	ADJ	A-----MS4D	Case=Acc|Definite=Def|Gender=Masc|Number=Sing	5	amod	5:amod	Vform=اَلأَسَاسِيَّ|Gloss=basic,fundamental|Root='_s_s|Translit=al-ʾasāsīya|LTranslit=ʾasāsīy
8	هو	هُوَ	PRON	SP---3MS1-	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	9	nmod	9:nmod:nom	Vform=هُوَ|Gloss=he,she,it|Translit=huwa|LTranslit=huwa
9	العرض	عَرض	NOUN	N------S1D	Case=Nom|Definite=Def|Number=Sing	2	dep	2:dep	Vform=اَلعَرضُ|Gloss=presentation,review,show,offer,tenders|Root=`_r_.d|Translit=al-ʿarḍu|LTranslit=ʿarḍ
10	و	وَ	CCONJ	C---------	_	12	cc	12:cc	Vform=وَ|Gloss=and|Root=wa|Translit=wa|LTranslit=wa
11	ليس	لَيس	AUX	VP-A-3MS--	Aspect=Perf|Gender=Masc|Number=Sing|Person=3|Voice=Act	12	cop	12:cop	Vform=لَيسَ|Gloss=be_not,is_not|Root=l_y_s|Translit=laysa|LTranslit=lays
12	الانتقاد	اِنتِقَاد	NOUN	N------S1D	Case=Nom|Definite=Def|Number=Sing	9	conj	2:dep|9:conj	SpaceAfter=No|Vform=اَلِانتِقَادُ|Gloss=criticism,censure|Root=n_q_d|Translit=al-i-ʼntiqādu|LTranslit=intiqād
13	.	.	PUNCT	G---------	_	2	punct	2:punct	Vform=.|Translit=.

~~~


~~~ conllu
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 19 18 cop	color:blue
1	و	وَ	CCONJ	C---------	_	0	root	0:root	Vform=وَ|Gloss=and|Root=wa|Translit=wa|LTranslit=wa
2	قد	قَد	PART	F---------	_	3	advmod:emph	3:advmod:emph	Vform=قَد|Gloss=indeed,has_/_have,may_/_might|Root=qad|Translit=qad|LTranslit=qad
3	يغري	أَغرَى	VERB	VIIA-3MS--	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Person=3|VerbForm=Fin|Voice=Act	1	parataxis	1:parataxis	Vform=يُغرِي|Gloss=incite,induce,provoke|Root=.g_r_w|Translit=yuġrī|LTranslit=ʾaġrā
4	أيضاً	أَيضًا	ADV	D---------	_	3	advmod:emph	3:advmod:emph	Vform=أَيضًا|Gloss=also|Root='_y_.d|Translit=ʾayḍan|LTranslit=ʾayḍan
5	ب	بِ	ADP	P---------	AdpType=Prep	6	case	6:case	Vform=بِ|Gloss=by,with|Root=bi|Translit=bi|LTranslit=bi
6	مقارنات	مُقَارَن	ADJ	A-----FP2I	Case=Gen|Definite=Ind|Gender=Fem|Number=Plur	3	obl:arg	3:obl:arg:بِ:gen	Vform=مُقَارَنَاتٍ|Gloss=comparative,compared|Root=q_r_n|Translit=muqāranātin|LTranslit=muqāran
7	في	فِي	ADP	P---------	AdpType=Prep	8	case	8:case	Vform=فِي|Gloss=in|Root=fI|Translit=fī|LTranslit=fī
8	غير	غَير	NOUN	N------S2R	Case=Gen|Definite=Cons|Number=Sing	6	nmod	6:nmod:فِي:gen	Vform=غَيرِ|Gloss=other,unlike,not,non_-|Root=.g_y_r|Translit=ġayri|LTranslit=ġayr
9	محل	مَحَلّ	NOUN	N------S2R	Case=Gen|Definite=Cons|Number=Sing	8	nmod	8:nmod:gen	Vform=مَحَلِّ|Gloss=place,location|Root=.h_l_l|Translit=maḥalli|LTranslit=maḥall
10	ها	هُوَ	PRON	SP---3FS2-	Case=Gen|Gender=Fem|Number=Sing|Person=3|PronType=Prs	9	nmod	9:nmod:gen	Vform=هَا|Gloss=he,she,it|Translit=hā|LTranslit=huwa
11	،	،	PUNCT	G---------	_	10	punct	10:punct	Vform=،|Translit=,
12	و	وَ	CCONJ	C---------	_	14	cc	14:cc	Vform=وَ|Gloss=and|Root=wa|Translit=wa|LTranslit=wa
13	ب	بِ	ADP	P---------	AdpType=Prep	14	case	14:case	Vform=بِ|Gloss=by,with|Root=bi|Translit=bi|LTranslit=bi
14	إطلاق	إِطلَاق	NOUN	N------S2R	Case=Gen|Definite=Cons|Number=Sing	6	conj	3:obl:arg:بِ:gen|6:conj	Vform=إِطلَاقِ|Gloss=release|Root=.t_l_q|Translit=ʾiṭlāqi|LTranslit=ʾiṭlāq
15	برامج	بَرنَامَج	NOUN	N------P2I	Case=Gen|Definite=Ind|Number=Plur	14	nmod	14:nmod:gen	Vform=بَرَامِجَ|Gloss=program|Root=b_r_m_^g|Translit=barāmiǧa|LTranslit=barnāmaǧ
16	بديلة	بَدِيلَة	NOUN	N------S2I	Case=Gen|Definite=Ind|Number=Sing	15	nmod	15:nmod:gen	Vform=بَدِيلَةٍ|Gloss=substitute,alternate|Root=b_d_l|Translit=badīlatin|LTranslit=badīlat
17	قد	قَد	PART	F---------	_	19	advmod:emph	19:advmod:emph	Vform=قَد|Gloss=indeed,has_/_have,may_/_might|Root=qad|Translit=qad|LTranslit=qad
18	تكون	كَان	AUX	VIIA-3FS--	Aspect=Imp|Gender=Fem|Mood=Ind|Number=Sing|Person=3|VerbForm=Fin|Voice=Act	19	cop	19:cop	Vform=تَكُونُ|Gloss=be,is,exist|Root=k_w_n|Translit=takūnu|LTranslit=kān
19	كارثية	كارثية	X	U---------	_	15	acl	15:acl	Vform=كارثية|Root=OOV|Translit=kārṯyat
20	على	عَلَى	ADP	P---------	AdpType=Prep	21	case	21:case	Vform=عَلَى|Gloss=on,above|Root=`_l_w|Translit=ʿalā|LTranslit=ʿalā
21	العراق	عِرَاق	NOUN	N------S2D	Case=Gen|Definite=Def|Number=Sing	19	nmod	19:nmod:عَلَى:gen	Vform=اَلعِرَاقِ|Gloss=Iraq|Root=`_r_q|Translit=al-ʿirāqi|LTranslit=ʿirāq
22	و	وَ	CCONJ	C---------	_	23	cc	23:cc	Vform=وَ|Gloss=and|Root=wa|Translit=wa|LTranslit=wa
23	جوار	جِوَار	NOUN	N------S2R	Case=Gen|Definite=Cons|Number=Sing	21	conj	19:nmod:عَلَى:gen|21:conj	Vform=جِوَارِ|Gloss=near,proximity|Root=^g_w_r|Translit=ǧiwāri|LTranslit=ǧiwār
24	ه	هُوَ	PRON	SP---3MS2-	Case=Gen|Gender=Masc|Number=Sing|Person=3|PronType=Prs	23	nmod	23:nmod:gen	Vform=هِ|Gloss=he,she,it|Translit=hi|LTranslit=huwa
25	.	.	PUNCT	G---------	_	1	punct	1:punct	Vform=.|Translit=.

~~~


