---
layout: relation
title: 'ccomp'
shortdef: 'clausal complement'
udver: '2'
---

Clausal complements can fill the object position in Middle Persian. This is typical for *verba dicendi* and similar verbs. The complement clause is always introduced by a [subjunctor](SCONJ), usually *kū*. Direct speech cannot be distinguished from reported speech as there is no person or tense shift in reported speech. Still, complement clauses that appear like direct speech also display features of indirect speech like enclitic pronouns as the seemingly first word of the speech.<br>The complement clause is sometimes interrupted by the speech verb. Contrary to the regular UD procedure, this is not annotated as a [parataxis]() relation because the complement clause is still marked as subordinated by the subjunctor *kū*.

- "(He) asked: What does exist and what does not exist?"
~~~ sdparse
pursīd kū čē ast ud čē nēst \n asked that what is and what is_not
mark(ast, kū)
ccomp(pursīd, ast)
~~~

- "And they said in reply: We have heard that the evil, which Ahreman created, every one must undergo (it) somewhere, in the material world or the spiritual world."
~~~ sdparse
ud awēšān pad passox guft kū =mān āšnūd ēstēd kū anāgīh ī ahreman bē dād harw kas gyāg ēw widārdan abāyēd pad gētī ayāb pad mēnōy \n and those in reply said that us heard stands that evil which Ahreman out put every someone place one let_pass must in material_world or spiritual_world
mark(āšnūd, kū-6)
ccomp(guft, āšnūd)
mark(abāyēd, kū-10)
ccomp(āšnūd, abāyēd)
~~~

- "If two men jointly sell an object to a man (...), Wahrām said that (the vendee) is authorised to request the guarantee from whomever he wishes."
~~~ sdparse
ka mard dō āgenēn xwāstag ēw ō mard ēw frōšēnd wahrām guft kū druyistdārišnīh az harw kē kāmēd xwāst pādixšāy \n if man two together object one to man one sell.3pl Wahrām said that guarantee from every who wishes request authorised
mark(frōšēnd, ka)
advcl(pādixšāy, frōšēnd)
mark(pādixšāy, kū)
ccomp(guft, pādixšāy)
~~~

The complement clause usually follows the main verb, and a resumptive pronoun can appear in situ. As one can argue that the postverbal position of complement clauses is the regular position, it is not considered dislocated. Instead, the resumptive pronoun is annotated as [dislocated:res](). Otherwise, there would basically be no `ccomp` relations in Middle Persian.

- "The authorities of the religion also say this that the Foul Spirit wanted to mis-create these wolf species secretly."
~~~ sdparse
dastwarān az dēn ēn =iz gōwēnd kū gannāgmēnōy ēn gurgsardagān nihānīg kirrēnīdan kāmist \n authorities from religion this also say.3PL that Foul_Spirit this wolf_species secretly mis-create wanted
nsubj(gōwēnd, dastwarān)
dislocated:res(gōwēnd, ēn)
mark(kāmist, kū)
ccomp(gōwēnd, kāmist)
~~~

<!-- Interlanguage links updated Út 30. června 2026, 10:59:46 CEST -->
