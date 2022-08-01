module.exports = function() {
    
    this.genericValidatorError = "Campos obrigatorios não preechidos corretamente ";
    this.existUserValidatorError = "Usuário já cadastrado";
    this.expiredTokenValidatorError = "Token encontra-se expirado";
    this.unauthorizedTokenError = "Este usuário, não está autenticado.",
    this.thePasswordsMustBeEqualsValidatorError = "Senhas devem ser iguais.";
    this.theNewPasswordMustBeDifferentThenBeforeValidatorError = "Nova senha deve ser diferente da anterior";
    this.theNewEmailMustBeDifferentTheBeforeValidatorError = "Novo e-mail não pode ser o mesmo do anterior";
    this.theNewEmailMustBeDifferentThanRecoveryEmailError = "Novo e-mail não pode ser o mesmo do email de recuperação";

    this.theCompanyStatusIsWrong = "A empresa ainda não está aprovada";
    
    this.nonAutenticateValidatorError = "Este usuário, não está autenticado.";
    this.nonExistentValidatorError = "Usuário inexistente";
    this.nonExistentInviteCodeError = "Codigo de convite inexistente";
    this.nonAuthorizedUserValidatorError = "Usuário não autorizado para realizar esta ação";
    this.nonExistentCompanyInAnalysis = "Não possui empresas cadastradas pendentes de analise";
    this.nonExistentCompanyRejected = "Não possui empresas com cadastro rejeitado";
    this.nonExietentCompanyNeedUpdate = "Não possui empresas que precisem atualizar suas informações";
    
    this.wrongPasswordValidatorError ="CPF/CNPJ ou senha incorretos.";
    this.wrongVerificationCodeValidatorError = "Código de verificação incorreto";
    this.wrongInviteCodeValidatorError =  "Código de convite inexistente";
    this.wrongOldPasswordValidatorError = "Senha antiga incorreta";
    this.thePasswordsCanotBeEqualsValidatorError = "Nova senha deve ser diferente da anterior.";
    this.theEmailIsDiferentValidatorError = "Email não pode ser diferente do cadastrado.";
    this.invalidUserId = "Usuário incorreto";
    
    this.theCategoryAlreadyExistValidatorError = "Categoria já existente.";
    this.nonExistentCategories = "Não existem categorias ativas para serem exibidas";
    this.theNameOfCategoryAlreadyExistValidatorError = "Nome de categoria já existente.";
    this.ExistentProfessionalError = "Profissional já cadastrado.";
    this.professionalAlreadyBlocked = "Profissional já bloqueado";
    this.serviceAlreadyBlocked = "Serviço já inativo no profissional"

    this.nonExistentCategoryValidatorError = "A categoria informada não existe.";
    this.nonExistentUnityValidatorError = "A unidade informada não existe";
    this.nonExistentProfessionalValidatorError = "O profissional informado não existe";
    this.nonExistentServiceValidatorError = "O serviço informado não existe";
    this.nonUnityInProfessionalValidatorError = "Profissional não cadastrado na unidade informada";
    this.nonUnityInServiceValidatorError = "Serviço não cadastrado na unidade informada";
    this.noServiceToReturn = "Não há serviços para serem exibidos.";
    this.noProfessionalInUnityValidatorError = "Não existem profissionais cadastrados na unidade informada";
    this.theStatusDataIsInvalid = "O status da categoria deve ser um boolean";
    this.theSameStatusCategoryValidatorError = "O status da categoria é o mesmo informado.";
    this.theSameStatusSubCategoryValidatorError = "O status da subcategoria é o mesmo informado.";
    this.verifyCodeError = "Código incorreto";
    this.sameOwnerOfInviteCodeError = "O codigo de convite precisa ser diferente do seu";
    this.allReadyLinkedError = "O usuario ja está vinculado a um codigo de convite";
    this.theSameStatusSubCategoryValidatorError = "O status da subcategoria é o mesmo informado.";
    this.noSubcategoriesApproved = " Não existem subcategorias aprovadas.";
    this.worgData = "Algum dado de Id foi passado incorretamente.";
    this.noProfessionalList ="Não existem profissionais a serem listados com os dados informados";
    this.noSubCategory = "Subcategoria não cadastrada."
    this.thisServiceIsNotInProfessional = "Serviço não está cadastrado no profissional."
    this.incorrectService = "Código de serviço incorreto."
    this.noSubcategoryToReturn = "Todas as subcategorias aprovadas, já estão cadastradas como serviço na unidade."
    
    this.nonServiceInActiveUnityValidatorError = "Não existem serviços ativos na unidade informada.";
    this.nonProfessionalByServiceValidatorError = "Não existem profissionais com esse serviço ativo.";
    this.noServiceInProfessionalValidatorError = "Serviço não cadastrado em profissionais.";
};