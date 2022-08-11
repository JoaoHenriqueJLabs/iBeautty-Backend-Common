module.exports = function() {
    
    this.genericValidatorError = "Campos obrigatórios não preechidos corretamente.";
    this.existUserValidatorError = "Usuário já cadastrado.";
    this.expiredTokenValidatorError = "O token encontra-se expirado.";
    this.unauthorizedTokenError = "Este usuário não está autenticado.",
    this.thePasswordsMustBeEqualsValidatorError = "As senhas devem ser iguais.";
    this.theNewPasswordMustBeDifferentThenBeforeValidatorError = "A nova senha deve ser diferente da anterior.";
    this.theNewEmailMustBeDifferentTheBeforeValidatorError = "O novo e-mail não pode ser o mesmo do anterior.";
    this.theNewEmailMustBeDifferentThanRecoveryEmailError = "O novo e-mail não pode ser o mesmo do email de recuperação.";

    this.theCompanyStatusIsWrong = "A empresa ainda não está aprovada.";
    
    this.nonAutenticateValidatorError = "Este usuário não está autenticado.";
    this.nonExistentValidatorError = "Usuário inexistente.";
    this.nonExistentInviteCodeError = "Código de convite inexistente.";
    this.nonAuthorizedUserValidatorError = "Usuário não autorizado para realizar esta ação.";
    this.nonExistentCompanyInAnalysis = "Não existem empresas cadastradas pendentes de análise.";
    this.nonExistentCompanyRejected = "Não existem empresas com cadastro rejeitado.";
    this.nonExietentCompanyNeedUpdate = "Não existem empresas pendentes de atualizar informações.";
    
    this.wrongPasswordValidatorError ="CPF/CNPJ ou senha incorretos.";
    this.wrongVerificationCodeValidatorError = "Código de verificação incorreto.";
    this.wrongInviteCodeValidatorError =  "Código de convite inexistente.";
    this.wrongOldPasswordValidatorError = "Senha antiga incorreta.";
    this.thePasswordsCanotBeEqualsValidatorError = "A nova senha deve ser diferente da anterior.";
    this.theEmailIsDiferentValidatorError = "O e-mail não pode ser diferente do cadastrado.";
    this.invalidUserId = "Usuário incorreto.";
    
    this.theCategoryAlreadyExistValidatorError = "Categoria já existente.";
    this.nonExistentCategories = "Não existem categorias ativas para serem exibidas.";
    this.theNameOfCategoryAlreadyExistValidatorError = "Nome de categoria já existente.";
    this.ExistentProfessionalError = "Profissional já cadastrado.";
    this.professionalAlreadyBlocked = "Profissional já bloqueado";
    this.serviceAlreadyBlocked = "Serviço já inativo no profissional"

    this.nonExistentCategoryValidatorError = "A categoria informada não existe.";
    this.nonExistentUnityValidatorError = "A unidade informada não existe";
    this.nonExistentProfessionalValidatorError = "O profissional informado não existe.";
    this.nonExistentServiceValidatorError = "O serviço informado não existe.";
    this.nonUnityInProfessionalValidatorError = "Profissional não cadastrado na unidade informada.";
    this.nonUnityInServiceValidatorError = "Serviço não cadastrado na unidade informada.";
    this.noServiceToReturn = "Não há serviços para serem exibidos.";
    this.noProfessionalInUnityValidatorError = "Não existem profissionais cadastrados na unidade informada.";
    this.theStatusDataIsInvalid = "O status da categoria deve ser verdadeiro ou falso.";
    this.theSameStatusCategoryValidatorError = "O status da categoria é o mesmo informado.";
    this.theSameStatusSubCategoryValidatorError = "O status da subcategoria é o mesmo informado.";
    this.verifyCodeError = "Código incorreto.";
    this.sameOwnerOfInviteCodeError = "O código de convite precisa ser diferente do seu.";
    this.allReadyLinkedError = "O usuário já está vinculado a um código de convite.";
    this.theSameStatusSubCategoryValidatorError = "O status da subcategoria é o mesmo informado.";
    this.noSubcategoriesApproved = " Não existem subcategorias aprovadas.";
    this.worgData = "Algum dado de Id foi passado incorretamente.";
    this.noProfessionalList ="Não existem profissionais a serem listados com os dados informados.";
    this.noSubCategory = "Subcategoria não cadastrada."
    this.thisServiceIsNotInProfessional = "O serviço não está cadastrado no profissional."
    this.incorrectService = "Código de serviço incorreto."
    this.noSubcategoryToReturn = "Todas as subcategorias aprovadas já estão cadastradas como serviço na unidade."
    
    this.nonServiceInActiveUnityValidatorError = "Não existem serviços ativos na unidade informada.";
    this.nonProfessionalByServiceValidatorError = "Não existem profissionais com esse serviço ativo.";
    this.noServiceInProfessionalValidatorError = "Serviço não cadastrado em profissionais.";
};
