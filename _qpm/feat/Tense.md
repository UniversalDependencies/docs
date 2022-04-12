---
layout: feature
title: 'Tense'
shortdef: 'tense'
udver: '2'
---

## Tense

Tense is a feature that specifies the time when the action took / takes / will take place, in relation to the current moment or to another action 
in the utterance.

Pomak verbal forms convey both tense and aspect information, therefore a complete description would specify both Tense and [Aspect]() features.
 
In [Aspect]() the pairs `Aspect=Prog`|`Tense=Past` and `Aspect=Iter`|`Tense=Past` were introduced to describe the fact that Pomak views iterations of 
events in the past either by focussing on their progressive nature or on the telic nature of each or the events in the iteration. 
Τhis description diverges from the one adopted by other Slavic languages (Bulgarian, Kroatian). 

For the description of the present and the simple past tense of Pomak, the pairs 
`Aspect=Imp`|`Tense=Pres`, `Aspect=Imp`|`Tense=Past` are used for the imperfective forms
and the pairs `Aspect=Perf`|`Tense=Pres`, `Aspect=Perf`|`Tense=Past` for the perfective ones respectively.

<!--Χάριν μιας καλύτερης, πληρέστερης και σαφέστερης περιγραφής των χρόνων της Πομακικής, αποφασίστηκε η συνδυαστική χρήση των 
features [Aspect](Aspect.html) και `Tense`.
Για την ικανοποίηση της ανάγκης αυτής προκρίθηκε η χρήση του συνδυασμού `Aspect=Prog`|`Tense=Past` για την περιγραφή του παρατατικού στη διαρκή του 
όψη και η χρήση του συνδυασμού `Aspect=Iter`|`Tense=Past` για την περιγραφή του παρατατικού στη συνοπτική του όψη αντί των συνδυασμών 
`Aspect=Imp`|`Tense=Imp` και `Aspect=Perf`|`Tense=Imp` που χρησιμοποιούν άλλες γλώσσες (Βουλγαρική, Κροατική).
Για την περιγραφή του ενεστώτα και του αορίστου χρησιμοποιούνται οι κοινοί απλοί συνδυασμοί: `Aspect=Imp`|`Tense=Pres`, `Aspect=Imp`|`Tense=Past` 
για τη διαρκή όψη και `Aspect=Perf`|`Tense=Pres`, `Aspect=Perf`|`Tense=Past` για τη συνοπτική όψη αντίστοιχα.-->

### <a name="Past">`Past`</a>: past tense / preterite / aorist

The past tense denotes actions that happened before the current moment.

#### Examples

`Aspect=Prog`

- *<b>méreh / mérešo</b> mǽstoto kugáta zafáti da letí* "<b>μετρούσα</b> το χωράφι όταν άρχισε να βρέχει"
- *<b>gradǽhme</b> kóštoto kugáta so toj radí* "<b>χτίζαμε</b> το σπίτι όταν εκείνος γεννήθηκε"
- *napréš sas múleta <b>kárahme</b> darvá* "παλιά με μουλάρια <b>κουβαλούσαμε</b> ξύλα"

`Aspect=Imp`
- *triš go <b>mérih</b> mǽstoto i tríšto izkárah drúgy metrá* "τρεις φορές το <b>μέτρησα</b> το χωράφι και τις τρεις έβγαλα άλλα (διαφορετικά) μέτρα"
- *triš je <b>gradího</b> isózi küprǘje i na ugradího je kákna trǽbava* "τρεις φορές το <b>έχτισαν</b> αυτό το γεφύρι και δεν το έχτισαν όπως πρέπει"
- *dvaš go <b>kárahme</b> tomofílese na mástaræ i na mažýho da nájdot kaná mú je* "δυο φορές το <b>πήγαμε</b> το αμάξι σε μάστορα και δεν μπόρεσαν να βρουν τί πρόβλημα έχει"

`Aspect=Iter`
- *agá <b>ídehme</b> u dǽda, toj nú <b>sýpešo</b> čáje i <b>zafátešo</b> da razkázava stáry meselé* "όταν <b>πηγαίναμε</b> στον παππού, αυτός μάς <b>έβαζε</b> τσάι και <b>άρχιζε</b> να διηγείται παλιές ιστορίες"
- *<b>stánešo</b> sabáhlajin, naj napréš <b>nahránešo</b> kúčetata i kótetata, azám <b>nagodǽšo</b> prógimo za tæh* "<b>σηκωνόταν</b> το πρωί, πρώτα - πρώτα <b>τάιζε</b> τα σκυλιά και τα γατιά, ύστερα <b>έφτιαχνε</b> πρωινό για τους ίδους"
- *agá <b>so vórnešo</b> at pazárene, <b>zberǽšo</b> vrit dečjána i <b>dadǽšo</b> mí šikére íli kanána drúgo be kúpil* "όταν <b>επέστρεφε</b> από το παζάρι, <b>μάζευε</b> όλα τα παιδιά και τά <b>έδινε</b> καραμέλες ή ό,τι άλλο είχε αγοράσει"

`Aspect=Perf`
- *u dumá sí <b>fprǽhme</b> vaz sabáh* "στο σπίτι <b>φτάσαμε</b> κατά το πρωί"
- *na drúguš fpírahme pó ráno, isǽ <b>argísahme</b> málko* "άλλη φορά φτάναμε πιο νωρίς, τώρα <b>αργήσαμε</b> λίγο"
- *za tri méseca <b>farníh</b> on kilá* "σε τρεις μήνες <b>πέταξα</b> δέκα κιλά"

### <a name="Pres">`Pres`</a>: present tense

The present tense denotes actions that are happening right now, that are crossing the moment of speaking or that usually happen.

#### Examples

`Aspect=Imp`
- *vaz pralét <b>so atváret</b> nóvy rábaty i <b>zbírot</b> ergáte* "την άνοιξη <b>ανοίγουν</b> νέες δουλειές και <b>μαζεύουν</b> εργάτες"
- *lǽtase <b>hódime</b> čósto na denízene* "το καλοκαίρι <b>πηγαίνουμε</b> συχνά στη θάλασσα"
- *zimóse <b>páda</b> gulǽm snæg faf barčínoso* "τον χειμώνα <b>πέφτει</b> πολύ χιόνι στο βουνό"

`Aspect=Perf`
- *kugá še <b>dójdeš</b> da to <b>vídime</b> - zabalǽhme so* "πότε θα <b>έρθεις</b> να σε <b>δούμε</b> - σε πεθυμήσαμε"
- *da na <b>zabaráviš<b> da mí <b>kúpiš</b> hlǽba* "να μην <b>ξεχάσεις</b> να μού <b>αγοράσεις</b> ψωμί"
- *še to <b>pópytom</b> annó rábato i íštom <b>kážaš</b> na právo* "θα σε <b>ρωτήσω</b> ένα πράγμα και θέλω να μου <b>πεις</b> στα ίσα"

<!-- Interlanguage links updated Pá kvě 14 11:08:41 CEST 2021 -->
