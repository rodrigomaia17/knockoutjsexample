var idCounter = 0;

function Pessoa(root){
	var self = this;
	root = root || {};

	self.id = ko.observable(root.id || ++idCounter);
	self.nome = ko.observable(root.nome || "");
	self.sobrenome = ko.observable(root.sobrenome || "");
	
	self.nomeCompleto = ko.computed(function() {
		return self.nome() + ' '+ self.sobrenome();
	});

}

function KnockoutExampleModel(){
	var self  = this;

	self.comboPessoas = ko.observableArray();
	self.comboPessoaSelecionada = ko.observableArray();

	self.nomeForm = ko.observable("");
	self.sobrenomeForm = ko.observable("");

	self.listaPessoas = ko.observableArray();

	self.addFromCombo = function(){
		self.listaPessoas.push(self.comboPessoaSelecionada());
	};
	
	self.addFromForm = function(){
		self.comboPessoas.push({ nome: self.nomeForm() , sobrenome: self.sobrenomeForm()});
		self.nomeForm('');
		self.sobrenomeForm('');
	};
}



$(function(){

	ViewModel = new KnockoutExampleModel();

	var pessoas = [
		new Pessoa({nome: "Rodrigo",sobrenome: "Maia"}),
		new Pessoa({nome: "Pessoa1",sobrenome: "sobrenome2"}),
		new Pessoa({nome: "Pessoa3",sobrenome: "sobrenome3"}),
		

	];

	ViewModel.comboPessoas(pessoas);

	ko.applyBindings(ViewModel);

});


// 2 - criar um form para adicionar manualmente